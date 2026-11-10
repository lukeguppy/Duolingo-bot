# Streak Status
Last run on: 2026-11-10 03:48:50 UTC

```
trackedAt: 2026-11-10T03:48:48.818Z
verified: true
reason: Session credited 10 XP; streak complete for 2026-11-10.
streak: 1311 -> 1311 (delta 0)
xp: 50906 -> 50916 (delta 10)
lastExtendedDate: 2026-11-10
```

## Practice output tail

```text

> duolingo-bot@1.0.0 practice /home/runner/work/Duolingo-bot/Duolingo-bot
> pnpm run exec-script src/practice.ts


> duolingo-bot@1.0.0 exec-script /home/runner/work/Duolingo-bot/Duolingo-bot
> node --loader ts-node/esm --experimental-specifier-resolution=node src/practice.ts

(node:2559) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
(node:2559) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  override existing env vars with { override: true }
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  specify custom .env file path with { path: '/custom/path/.env' }
[dotenv@17.2.3] injecting env (0) from .env -- tip: 🔄 add secrets lifecycle management: https://dotenvx.com/ops
Starting practice session...
Navigating to Words lesson...
Clicking Start button...
Session data captured
Idle iteration 25: url=https://www.duolingo.com/practice-hub/words/practice
Idle iteration 50: url=https://www.duolingo.com/practice-hub/words/practice
Challenge type: match
Solving Pair: "enchilada" <-> "enchilada"
Solving Pair: "gossip" <-> "chisme"
Solving Pair: "dirty" <-> "sucio"
Solving Pair: "champagne" <-> "champán"
Solving Pair: "strange" <-> "raro"
Solved 5 tokens.
Challenge type: extendedListenMatch
Solving Self-Match: "trash-challenge-tap-token"
Solving Self-Match: "reservation-challenge-tap-token"
Solving Self-Match: "dirty-challenge-tap-token"
Solving Self-Match: "sign-challenge-tap-token to"
Solving Self-Match: "shoe-challenge-tap-token"
Solving Self-Match: "fan-challenge-tap-token"
Solving Self-Match: "illegal-challenge-tap-token"
Solving Self-Match: "champagne-challenge-tap-token"
Solving Self-Match: "nice-challenge-tap-token"
Solving Self-Match: "strange-challenge-tap-token"
Solving Self-Match: "gossip-challenge-tap-token"
Solving Self-Match: "enchilada-challenge-tap-token"
Solving Self-Match: "friends-challenge-tap-token"
No active tokens found
Solved 13 tokens.
Challenge type: extendedMatch
Solving Pair: "used" <-> "usado"
Solving Pair: "to sign" <-> "firmar"
Solving Pair: "dream" <-> "sueño"
Solving Pair: "trash" <-> "basura"
Solving Pair: "fan" <-> "hincha"
Solving Pair: "strange" <-> "raro"
Solving Pair: "dirty" <-> "sucio"
Solving Pair: "gossip" <-> "chisme"
Solving Pair: "illegal" <-> "ilegal"
Solving Pair: "to open" <-> "abrir"
Solving Pair: "friends" <-> "amistad"
Solving Pair: "candidate" <-> "candidato"
Solving Pair: "shoe" <-> "zapato"
Solving Pair: "reservation" <-> "reserva"
Solving Pair: "mistaken" <-> "falso"
Solving Pair: "enchilada" <-> "enchilada"
Solving Pair: "own" <-> "propio"
Solving Pair: "at first sight" <-> "a primera vista"
Solving Pair: "champagne" <-> "champán"
Solving Pair: "nice" <-> "lindo"
Solving Pair: "separately" <-> "separado"
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
XP credited during session (50906 -> 50916). Session complete!
Session loop ended.
Session end. Streak: 1311, XP: 50906, lastExtended: 2026-11-10
Post-session streak: 1311, XP: 50916, lastExtended: 2026-11-10
✅ Session credited 10 XP; streak complete for 2026-11-10.
```
