# Streak Status
Last run on: 2026-10-29 01:59:24 UTC

```
trackedAt: 2026-10-29T01:59:22.432Z
verified: true
reason: Session credited 10 XP; streak complete for 2026-10-29.
streak: 1300 -> 1300 (delta 0)
xp: 50510 -> 50520 (delta 10)
lastExtendedDate: 2026-10-29
```

## Practice output tail

```text

> duolingo-bot@1.0.0 practice /home/runner/work/Duolingo-bot/Duolingo-bot
> pnpm run exec-script src/practice.ts


> duolingo-bot@1.0.0 exec-script /home/runner/work/Duolingo-bot/Duolingo-bot
> node --loader ts-node/esm --experimental-specifier-resolution=node src/practice.ts

(node:2316) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
(node:2316) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  load multiple .env files with { path: ['.env.local', '.env'] }
[dotenv@17.2.3] injecting env (0) from .env -- tip: 🛠️  run anywhere with `dotenvx run -- yourcommand`
[dotenv@17.2.3] injecting env (0) from .env -- tip: ✅ audit secrets and track compliance: https://dotenvx.com/ops
Starting practice session...
Navigating to Words lesson...
Clicking Start button...
Session data captured
Challenge type: match
Solving Pair: "package" <-> "paquete"
Solving Pair: "stamp" <-> "estampilla"
Solving Pair: "mailman" <-> "cartero"
Solving Pair: "to answer" <-> "responder"
Solving Pair: "under" <-> "debajo de"
Solved 5 tokens.
Challenge type: extendedListenMatch
Solving Self-Match: "free time-challenge-tap-token"
Solving Self-Match: "stamp-challenge-tap-token"
Solving Self-Match: "what-challenge-tap-token with"
Solving Self-Match: "answer-challenge-tap-token to"
Solving Self-Match: "sand-challenge-tap-token"
Solving Self-Match: "traffic-challenge-tap-token"
Solving Self-Match: "take-challenge-tap-token to"
Solving Self-Match: "(to) build-challenge-tap-token"
Solving Self-Match: "package-challenge-tap-token"
Solving Self-Match: "mailman-challenge-tap-token"
Solving Self-Match: "(you) make-challenge-tap-token"
Solving Self-Match: "pile-challenge-tap-token"
Solving Self-Match: "under-challenge-tap-token"
No active tokens found
Solved 13 tokens.
Challenge type: extendedMatch
Solving Pair: "mailman" <-> "cartero"
Solving Pair: "to answer" <-> "responder"
Solving Pair: "sand" <-> "arena"
Solving Pair: "pile" <-> "montón"
Solving Pair: "traffic" <-> "tráfico"
Solving Pair: "to take" <-> "tomar"
Solving Pair: "(you) make" <-> "haz"
Solving Pair: "menu" <-> "menú"
Solving Pair: "enroll" <-> "inscribirse"
Solving Pair: "with what" <-> "con qué"
Solving Pair: "free time" <-> "tiempo libre"
Solving Pair: "package" <-> "paquete"
Solving Pair: "you" <-> "usted"
Solving Pair: "stamp" <-> "estampilla"
Solving Pair: "pill" <-> "pastilla"
Solving Pair: "(to) build" <-> "construir"
Solving Pair: "under" <-> "debajo de"
Solving Pair: "magic" <-> "mágico"
Solving Pair: "angel" <-> "ángel"
Solving Pair: "restaurants" <-> "restaurante"
Solving Pair: "mental health" <-> "salud mental"
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
XP credited during session (50510 -> 50520). Session complete!
Session loop ended.
Session end. Streak: 1300, XP: 50510, lastExtended: 2026-10-29
Post-session streak: 1300, XP: 50520, lastExtended: 2026-10-29
✅ Session credited 10 XP; streak complete for 2026-10-29.
```
