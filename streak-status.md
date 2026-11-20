# Streak Status
Last run on: 2026-11-20 03:46:58 UTC

```
trackedAt: 2026-11-20T03:46:56.455Z
verified: true
reason: Session credited 10 XP; streak complete for 2026-11-20.
streak: 1321 -> 1321 (delta 0)
xp: 51286 -> 51296 (delta 10)
lastExtendedDate: 2026-11-20
```

## Practice output tail

```text

> duolingo-bot@1.0.0 practice /home/runner/work/Duolingo-bot/Duolingo-bot
> pnpm run exec-script src/practice.ts


> duolingo-bot@1.0.0 exec-script /home/runner/work/Duolingo-bot/Duolingo-bot
> node --loader ts-node/esm --experimental-specifier-resolution=node src/practice.ts

(node:2772) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
(node:2772) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  override existing env vars with { override: true }
[dotenv@17.2.3] injecting env (0) from .env -- tip: 👥 sync secrets across teammates & machines: https://dotenvx.com/ops
[dotenv@17.2.3] injecting env (0) from .env -- tip: 🗂️ backup and recover secrets: https://dotenvx.com/ops
Starting practice session...
Navigating to Words lesson...
Clicking Start button...
Session data captured
Idle iteration 25: url=https://www.duolingo.com/practice-hub/words/practice
Idle iteration 50: url=https://www.duolingo.com/practice-hub/words/practice
Challenge type: match
Solving Pair: "eighteen" <-> "dieciocho"
Solving Pair: "happy birthday" <-> "feliz cumpleaños"
Solving Pair: "candle" <-> "vela"
Solving Pair: "boot" <-> "bota"
Solving Pair: "November" <-> "noviembre"
Solved 5 tokens.
Challenge type: extendedListenMatch
Solving Self-Match: "DJ-challenge-tap-token"
Solving Self-Match: "lamb-challenge-tap-token"
Solving Self-Match: "Muslim-challenge-tap-token"
Solving Self-Match: "candle-challenge-tap-token"
Solving Self-Match: "boot-challenge-tap-token"
Solving Self-Match: "seafood-challenge-tap-token"
Solving Self-Match: "meet-challenge-tap-token to"
Solving Self-Match: "period-challenge-tap-token"
Solving Self-Match: "eighteen-challenge-tap-token"
Solving Self-Match: "birthday-challenge-tap-token happy"
Solving Self-Match: "November-challenge-tap-token"
Solving Self-Match: "can-challenge-tap-token"
Solving Self-Match: "calculator-challenge-tap-token"
No active tokens found
Solved 13 tokens.
Challenge type: extendedMatch
Solving Pair: "letter" <-> "carta"
Solving Pair: "DJ" <-> "dj"
Solving Pair: "boot" <-> "bota"
Solving Pair: "period" <-> "plazo"
Solving Pair: "(I) cure" <-> "sano"
Solving Pair: "calculator" <-> "calculadora"
Solving Pair: "candle" <-> "vela"
Solving Pair: "seafood" <-> "mariscos"
Solving Pair: "old" <-> "antiguo"
Solving Pair: "eighteen" <-> "dieciocho"
Solving Pair: "Muslim" <-> "musulmán"
Solving Pair: "coach's" <-> "técnico"
Solving Pair: "to meet" <-> "reunirse"
Solving Pair: "poetry" <-> "poesía"
Solving Pair: "racket" <-> "raqueta"
Solving Pair: "happy birthday" <-> "feliz cumpleaños"
Solving Pair: "case" <-> "estuche"
Solving Pair: "November" <-> "noviembre"
Solving Pair: "lamb" <-> "cordero"
Solving Pair: "can" <-> "lata"
Solving Pair: "fixed" <-> "preparar"
Solved 21 tokens.
Challenge type: extendedMatch
Error in loop: locator.getAttribute: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('[data-test^="challenge challenge-"]').first()

    at getChallengeType (/home/runner/work/Duolingo-bot/Duolingo-bot/src/utils/solver.ts:8:43)
    at async solveMatchChallenge (/home/runner/work/Duolingo-bot/Duolingo-bot/src/utils/solver.ts:42:48)
    at async solveVisibleTokens (/home/runner/work/Duolingo-bot/Duolingo-bot/src/utils/solver.ts:29:16)
    at async file:///home/runner/work/Duolingo-bot/Duolingo-bot/src/practice.ts:87:37 {
  name: 'TimeoutError'
}
XP credited during session (51286 -> 51296). Session complete!
Session loop ended.
Session end. Streak: 1321, XP: 51286, lastExtended: 2026-11-20
Post-session streak: 1321, XP: 51296, lastExtended: 2026-11-20
✅ Session credited 10 XP; streak complete for 2026-11-20.
```
