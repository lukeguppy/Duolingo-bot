import { Page } from 'playwright';
import { captureSessionData } from './network';
import { Session } from '../interfaces';

/**
 * Navigates to the Practice Hub Words lesson and starts it.
 * Prefers a direct URL because the hub card selectors are brittle.
 */
export async function startWordsLesson(page: Page): Promise<Session | null> {
    console.log('Navigating to Words lesson...');

    await page.goto('https://www.duolingo.com/practice-hub/words', {
        waitUntil: 'domcontentloaded',
    });

    // Dismiss common interstitial UI if present
    await dismissBlockingUi(page);

    const startButton = page.getByRole('button', { name: /^(START|REVIEW)$/i }).first();
    try {
        await startButton.waitFor({ state: 'visible', timeout: 20000 });
    } catch (error) {
        // Fallback: open Practice Hub and click the Words card
        console.log('Direct Words page did not show START/REVIEW. Falling back to Practice Hub UI...');
        await page.goto('https://www.duolingo.com/practice-hub', { waitUntil: 'domcontentloaded' });
        await dismissBlockingUi(page);

        const collectionButtons = page.locator('[data-test="practice-hub-collection-button"]');
        await collectionButtons.first().waitFor({ state: 'visible', timeout: 15000 });

        const labels = await collectionButtons.allTextContents();
        console.log('Practice hub collections:', labels.map((t) => t.replace(/\s+/g, ' ').trim()));

        const wordsButton = collectionButtons
            .filter({ hasText: /Words/i })
            .filter({ hasNotText: /Stories/i })
            .first();

        await wordsButton.waitFor({ state: 'visible', timeout: 10000 });
        console.log('Clicking Words button...');
        await wordsButton.click();
        await startButton.waitFor({ state: 'visible', timeout: 15000 });
    }

    const sessionDataPromise = captureSessionData(page, 30000);

    console.log('Clicking Start button...');
    await startButton.click();
    await startButton.waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {
        console.log('Start button still visible after click; continuing anyway.');
    });

    return await sessionDataPromise;
}

async function dismissBlockingUi(page: Page): Promise<void> {
    const candidates = [
        page.locator('[data-test="notification-drawer-close"]'),
        page.locator('[data-test="close-button"]'),
        page.getByRole('button', { name: /^(NOT NOW|NO THANKS|CLOSE|SKIP|CONTINUE|OK)$/i }),
    ];

    for (const locator of candidates) {
        try {
            if (await locator.first().isVisible({ timeout: 1000 })) {
                await locator.first().click({ timeout: 2000 });
                await page.waitForTimeout(500);
            }
        } catch {
            // Ignore missing/non-clickable overlays
        }
    }
}
