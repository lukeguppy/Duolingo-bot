import { chromium, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { createLogDirectory } from './utils/logger.js';
import { getStatePath, waitForLogin, ensureStateExists } from './utils/auth.js';
import { startNetworkLogging, captureUserData } from './utils/network.js';
import { solveVisibleTokens } from './utils/solver.js';
import { startWordsLesson } from './utils/navigation.js';
import { getCurrentLanguage, selectLanguage } from './utils/homepage.js';
import { getBrowserConfig, getContextOptions } from './utils/browser.js';
import { verifySessionOutcome, writeVerificationReport, fetchAccountStats } from './utils/verification.js';

dotenv.config();

(async () => {
    console.log('Starting practice session...');

    const storageStatePath = getStatePath();
    const validStatePath = ensureStateExists();
    if (!validStatePath) {
        console.error('❌ No saved state found. Please login first.');
        process.exit(1);
    }

    const browser = await chromium.launch(getBrowserConfig());
    const logDir = createLogDirectory('practice');
    let page: Page | null = null;

    try {
        const context = await browser.newContext({
            ...getContextOptions(),
            storageState: storageStatePath,
        });
        page = await context.newPage();

        await startNetworkLogging(page, logDir);

        const userDataPromise = captureUserData(page);
        await page.goto('https://www.duolingo.com/learn', { waitUntil: 'domcontentloaded' });

        if (!await waitForLogin(page)) {
            console.error('❌ Not logged in.');
            await browser.close();
            process.exit(1);
        }

        const userData = await userDataPromise;
        if (!userData) {
            console.error('❌ Failed to capture user data.');
            await browser.close();
            process.exit(1);
        }

        // Language Switch Logic
        const targetLanguage = process.env.PRACTICE_LANGUAGE;
        if (targetLanguage) {
            const currentLanguage = getCurrentLanguage({ userData, leaderboardData: null });

            if (currentLanguage !== targetLanguage) {
                console.log(`Current language: ${currentLanguage}`);
                console.log(`Switching to ${targetLanguage}...`);
                await selectLanguage(page, targetLanguage);
            }
        }

        const sessionData = await startWordsLesson(page);
        if (!sessionData || !sessionData.challenges) {
            console.error('❌ Failed to capture session data.');
            await browser.close();
            process.exit(1);
        }

        fs.writeFileSync(path.join(logDir, 'session_data.json'), JSON.stringify(sessionData, null, 2));

        // Identify and Solve Loop.
        // Duolingo's Words review flow begins further rounds with a "Start/Review"
        // button mid-lesson, so an early break here abandons the session and no XP
        // is credited. Only stop once the account's XP proves the session landed
        // (or a hard safety cap is hit).
        const sessionStartXp = userData.totalXp ?? null;
        let creditsXp = false;
        let iterations = 0;
        let lastXpCheckMs = 0;
        let startXpValue : number | null = sessionStartXp;
        let consecutiveStartClicks = 0;
        let idleIterations = 0;

        while (true) {
            iterations++;
            if (iterations > 1500) {
                console.warn('Solver loop hit the safety cap; stopping.');
                break;
            }

            try {
                // 1. Try to click "Continue" button (End of session or next section)
                const continueButton = page.locator('[data-test="player-next"]');
                if (await continueButton.isVisible()) {
                    await continueButton.click();
                }

                // 2. Solve visible tokens
                const solvedCount = await solveVisibleTokens(page, sessionData);

                // Track idle iterations (no progress) and periodically dump page
                // state so breakages can be diagnosed from the console output.
                if (solvedCount === 0) {
                    idleIterations++;
                    if (idleIterations % 25 === 0) {
                        const heading = await page
                            .locator('h1, h2, [data-test="player-name"], [data-test="player-heading"]')
                            .first()
                            .textContent({ timeout: 2000 })
                            .catch(() => null);
                        console.log(
                            `Idle iteration ${idleIterations}: url=${page.url()}` +
                            (heading ? ` heading="${heading.trim().slice(0, 120)}"` : ''),
                        );
                        await page.screenshot({ path: path.join(logDir, `idle_state_${iterations}.png`) });
                    }
                } else {
                    idleIterations = 0;
                    console.log(`Solved ${solvedCount} tokens.`);
                }

                // 3. Handle Start/Review buttons: the hub shows them after the
                //    lesson, but the lesson flow also uses them to begin rounds.
                const startButton = page.getByRole('button', { name: /START|REVIEW/i });
                if (await startButton.isVisible()) {
                    const now = Date.now();
                    if (startXpValue !== null && now - lastXpCheckMs > 5000) {
                        lastXpCheckMs = now;
                        const stats = await fetchAccountStats(page, userData.id, 1, 0);
                        if (stats.totalXp !== null && stats.totalXp > startXpValue) {
                            startXpValue = stats.totalXp;
                            creditsXp = true;
                            console.log(`XP credited during session (${sessionStartXp} -> ${stats.totalXp}). Session complete!`);
                            break;
                        }
                    }

                    if (creditsXp) {
                        break;
                    }

                    consecutiveStartClicks++;
                    if (consecutiveStartClicks > 4) {
                        console.warn('Start button keeps reappearing after clicking; finishing loop.');
                        break;
                    }

                    console.log('Start/Review button detected mid-session; starting next round.');
                    await startButton.click();
                    await startButton.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {
                        console.log('Start button still visible after click; continuing anyway.');
                    });
                    continue;
                }
                consecutiveStartClicks = 0;
            } catch (e: any) {
                if (e.message && e.message.includes('Target page, context or browser has been closed')) {
                    break;
                }
                console.error('Error in loop:', e);
            }
        }

        console.log('Session loop ended.');

        // Verify the lesson actually counted before closing the browser.
        // Closing too early can abort the score submission while still
        // reporting success, silently losing the streak.
        const verification = await verifySessionOutcome(page, userData);
        writeVerificationReport(logDir, verification);

        await page.screenshot({ path: path.join(logDir, 'session_completed.png') });
        await browser.close();

        console.log(verification.verified ? `✅ ${verification.reason}` : `❌ ${verification.reason}`);

        if (!verification.verified) {
            process.exit(1);
        }

    } catch (error) {
        console.error('An error occurred:', error);
        if (page) {
            try {
                const html = await page.content();
                fs.writeFileSync(path.join(logDir, 'error_state.html'), html);
                await page.screenshot({ path: path.join(logDir, 'error.png') });
            } catch (e) { }
        }
        await browser.close();
        process.exit(1);
    }
})();

