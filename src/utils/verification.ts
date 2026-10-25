import { Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { UserData } from '../interfaces/index.js';
import { getLocalDateString } from './homepage.js';

/**
 * Streak and XP numbers for an account at a point in time.
 */
export interface AccountStats {
    streak: number | null;
    totalXp: number | null;
    lastExtendedDate: string | null;
}

/**
 * Outcome of verifying a practice session against Duolingo's account API.
 */
export interface SessionVerification {
    verified: boolean;
    reason: string;
    startStreak: number | null;
    endStreak: number | null;
    streakDelta: number | null;
    startXp: number | null;
    endXp: number | null;
    xpDelta: number | null;
    startLastExtendedDate: string | null;
    endLastExtendedDate: string | null;
}

function toStats(userData: UserData): AccountStats {
    return {
        streak: typeof userData.streak === 'number' ? userData.streak : null,
        totalXp: typeof userData.totalXp === 'number' ? userData.totalXp : null,
        lastExtendedDate: userData.streakData?.currentStreak?.lastExtendedDate ?? null,
    };
}

/**
 * Fetch fresh streak and XP stats from Duolingo, retrying to allow the lesson
 * score submission to finish before the browser closes.
 */
export async function fetchAccountStats(
    page: Page,
    userId: number,
    maxAttempts: number = 10,
    delayMs: number = 4000,
): Promise<AccountStats> {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const response = await page.request.get(
                `https://www.duolingo.com/2017-06-30/users/${userId}?fields=streak,totalXp,streakData`,
            );
            if (response.ok()) {
                const data = await response.json();
                return {
                    streak: typeof data?.streak === 'number' ? data.streak : null,
                    totalXp: typeof data?.totalXp === 'number' ? data.totalXp : null,
                    lastExtendedDate: data?.streakData?.currentStreak?.lastExtendedDate ?? null,
                };
            }
            console.error(`Stats request failed with status ${response.status()} (attempt ${attempt}/${maxAttempts}).`);
        } catch (error) {
            console.error(
                `Stats request error (attempt ${attempt}/${maxAttempts}):`,
                error instanceof Error ? error.message : error,
            );
        }
        if (attempt < maxAttempts) {
            await page.waitForTimeout(delayMs);
        }
    }
    return { streak: null, totalXp: null, lastExtendedDate: null };
}

/**
 * Poll the account API until the lesson outcome is visible and decide whether
 * the session actually credited XP and kept the streak alive.
 */
export async function verifySessionOutcome(page: Page, startUserData: UserData): Promise<SessionVerification> {
    const start = toStats(startUserData);
    console.log(
        `Session end. Streak: ${start.streak}, XP: ${start.totalXp}, lastExtended: ${start.lastExtendedDate}`,
    );

    const end = await fetchAccountStats(page, startUserData.id);
    console.log(`Post-session streak: ${end.streak}, XP: ${end.totalXp}, lastExtended: ${end.lastExtendedDate}`);

    const today = getLocalDateString(startUserData.timezoneOffset);
    const startExtendedToday = start.lastExtendedDate === today;
    const endExtendedToday = end.lastExtendedDate === today;

    const xpDelta =
        start.totalXp !== null && end.totalXp !== null ? end.totalXp - start.totalXp : null;
    const streakDelta =
        start.streak !== null && end.streak !== null ? end.streak - start.streak : null;

    const statsAvailable = end.streak !== null || end.totalXp !== null;
    const xpEarned = xpDelta !== null && xpDelta > 0;

    let verified = false;
    let reason: string;
    if (!statsAvailable) {
        reason = 'Could not read account stats to verify the session outcome.';
    } else if (!xpEarned) {
        reason = `No XP credited by this session (XP ${start.totalXp} -> ${end.totalXp}). Lesson did not count.`;
    } else if (streakDelta === null && !endExtendedToday && !startExtendedToday) {
        // Streak data unavailable; XP gain proves the lesson counted, so accept it.
        verified = true;
        reason = `Session credited ${xpDelta} XP (streak data unavailable).`;
    } else if (endExtendedToday || startExtendedToday || (streakDelta !== null && streakDelta > 0)) {
        verified = true;
        reason = `Session credited ${xpDelta} XP; streak complete for ${today}.`;
    } else {
        reason = `XP credited (${xpDelta}) but streak not marked complete for ${today}.`;
    }

    return {
        verified,
        reason,
        startStreak: start.streak,
        endStreak: end.streak,
        streakDelta,
        startXp: start.totalXp,
        endXp: end.totalXp,
        xpDelta,
        startLastExtendedDate: start.lastExtendedDate,
        endLastExtendedDate: end.lastExtendedDate,
    };
}

/**
 * Persist the verification result so CI can publish it to the repository.
 * Outputs both a human-readable summary and a machine-readable JSON file.
 */
export function writeVerificationReport(logDir: string, verification: SessionVerification): void {
    const report = [
        `trackedAt: ${new Date().toISOString()}`,
        `verified: ${verification.verified}`,
        `reason: ${verification.reason}`,
        `streak: ${verification.startStreak ?? 'unknown'} -> ${verification.endStreak ?? 'unknown'} (delta ${verification.streakDelta ?? 'unknown'})`,
        `xp: ${verification.startXp ?? 'unknown'} -> ${verification.endXp ?? 'unknown'} (delta ${verification.xpDelta ?? 'unknown'})`,
        `lastExtendedDate: ${verification.endLastExtendedDate ?? 'unknown'}`,
    ].join('\n');

    fs.writeFileSync(path.join(logDir, 'streak-status.txt'), report);
    fs.writeFileSync(path.join(logDir, 'verification.json'), JSON.stringify(verification, null, 2));
}
