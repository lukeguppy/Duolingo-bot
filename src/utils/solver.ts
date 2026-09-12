import { Page } from 'playwright';
import { Session, Challenge } from '../interfaces/index.js';
import { getVisibleTokens, normalize, VisibleToken } from './token.js';

const SupportedChallengeTypes = ['extendedListenMatch', 'match', 'extendedMatch', 'none'] as const;
type ChallengeType = typeof SupportedChallengeTypes[number];

export async function getChallengeType(page: Page): Promise<ChallengeType> {
    const challengeType = page.locator('[data-test^="challenge challenge-"]').first();
    if (!await challengeType.isVisible()) {
        return 'none';
    }
    const attribute = await challengeType.getAttribute('data-test');
    if (!attribute) {
        return 'none';
    }

    const challengeTypeString = attribute.replace('challenge challenge-', '') as ChallengeType;
    if (!SupportedChallengeTypes.includes(challengeTypeString)) {
        console.error(`Unsupported challenge type: ${challengeTypeString}`);
    }

    return challengeTypeString;
}

/**
 * Solves visible tokens on the page using Self-Match and Session-Match strategies.
 * Returns true if an action was taken (tokens clicked), false otherwise.
 */
export async function solveVisibleTokens(page: Page, sessionData: Session): Promise<number> {
    const challengeType = await getChallengeType(page);
    if (challengeType === 'none') {
        console.error('No challenge type found');
        return 0;
    } else {
        console.log(`Challenge type: ${challengeType}`);
    }

    if (['match', 'extendedMatch'].includes(challengeType)) {
        return await solveMatchChallenge(page, sessionData);
    } else if (challengeType === 'extendedListenMatch') {
        return await solveExtendedListenMatchChallenge(page, sessionData);
    } else {
        console.error(`Unsupported challenge type: ${challengeType}`);
    }

    return 0;
}

export async function solveMatchChallenge(page: Page, sessionData: Session): Promise<number> {
    let solved = 0;
    let idleRounds = 0;

    while (['match', 'extendedMatch'].includes(await getChallengeType(page))) {
        const visibleTokens = await getVisibleTokens(page);
        if (visibleTokens.length === 0) break;

        // Find the challenge that matches the most visible tokens
        let bestChallenge: Challenge | null = null;
        let maxMatches = 0;

        for (const challenge of sessionData.challenges) {
            if (!challenge.pairs) continue;
            let matches = 0;
            for (const pair of challenge.pairs) {
                const normFrom = normalize(pair.fromToken);
                const normLearning = normalize(pair.learningToken);
                const fromTokens = visibleTokens.filter(vt => normalize(vt.cleanInnerText) === normFrom || normalize(vt.text) === normFrom);
                const learningTokens = visibleTokens.filter(vt => normalize(vt.cleanInnerText) === normLearning || normalize(vt.text) === normLearning);
                // Cognates (e.g. ballet/ballet) need two distinct tiles
                const hasPair = normFrom === normLearning
                    ? fromTokens.length >= 2
                    : fromTokens.length > 0 && learningTokens.length > 0;
                if (hasPair) matches++;
            }
            if (matches > maxMatches) {
                maxMatches = matches;
                bestChallenge = challenge;
            }
        }

        if (!bestChallenge || !bestChallenge.pairs || maxMatches === 0) {
            console.warn('No matching pairs found in session data');
            break;
        }

        let actionTaken = false;
        const remaining = [...visibleTokens];

        for (const pair of bestChallenge.pairs) {
            const normFrom = normalize(pair.fromToken);
            const normLearning = normalize(pair.learningToken);

            const tokenAIndex = remaining.findIndex(t => normalize(t.cleanInnerText) === normFrom || normalize(t.text) === normFrom);
            if (tokenAIndex === -1) continue;
            const tokenA = remaining[tokenAIndex];

            const tokenBIndex = remaining.findIndex((t, i) =>
                i !== tokenAIndex && (normalize(t.cleanInnerText) === normLearning || normalize(t.text) === normLearning)
            );
            if (tokenBIndex === -1) continue;
            const tokenB = remaining[tokenBIndex];

            console.log(`Solving Pair: "${tokenA.cleanInnerText || tokenA.text}" <-> "${tokenB.cleanInnerText || tokenB.text}"`);
            await tokenA.element.click();
            await tokenB.element.click();
            solved++;
            actionTaken = true;

            // Remove highest index first so the other index stays valid
            for (const index of [tokenAIndex, tokenBIndex].sort((a, b) => b - a)) {
                remaining.splice(index, 1);
            }

            await page.waitForTimeout(500);
        }

        if (!actionTaken) {
            idleRounds++;
            if (idleRounds >= 3) {
                console.warn('Match solver made no progress; stopping to avoid a loop.');
                break;
            }
            await page.waitForTimeout(500);
            continue;
        }

        idleRounds = 0;
    }
    return solved;
}

/**
 * Self-Match (Audio <-> Word)
 */
export async function solveExtendedListenMatchChallenge(page: Page, sessionData: Session) {
    let solved = 0;
    while (await getChallengeType(page) === 'extendedListenMatch') {
        const visibleTokens = await getVisibleTokens(page);
        if (visibleTokens.length === 0) {
            console.warn('No active tokens found');
            return solved;
        }

        // Group by data-test text to find Audio-Word pairs (Audio has no innerText)
        const tokenPairs = visibleTokens.reduce((acc, token) => {
            const key = token.dataTest;
            if (!acc.has(key)) acc.set(key, []);
            acc.get(key)?.push(token);
            return acc;
        }, new Map<string, VisibleToken[]>());

        // Remove single tokens (second one not loaded yet)
        tokenPairs.forEach((tokens, key) => {
            if (tokens.length === 1) {
                tokenPairs.delete(key);
            }
        });

        if (tokenPairs.size === 0) {
            console.warn('No token pairs found');
            return solved;
        }

        for (const [_, tokens] of tokenPairs) {
            console.log(`Solving Self-Match: "${tokens[0].dataTest}"`);
            await tokens[0].element.click();
            await tokens[1].element.click();
            solved++;

            // Wait for tokens to disappear
            await page.waitForTimeout(500);
        }
    }

    return solved;
}