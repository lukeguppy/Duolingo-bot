# Streak Status
Last run on: 2026-11-11 01:29:37 UTC

```
trackedAt: 2026-11-11T01:29:35.572Z
verified: true
reason: Session credited 10 XP; streak complete for 2026-11-11.
streak: 1311 -> 1312 (delta 1)
xp: 50946 -> 50956 (delta 10)
lastExtendedDate: 2026-11-11
```

## Practice output tail

```text

> duolingo-bot@1.0.0 practice /home/runner/work/Duolingo-bot/Duolingo-bot
> pnpm run exec-script src/practice.ts


> duolingo-bot@1.0.0 exec-script /home/runner/work/Duolingo-bot/Duolingo-bot
> node --loader ts-node/esm --experimental-specifier-resolution=node src/practice.ts

(node:2359) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
(node:2359) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
[dotenv@17.2.3] injecting env (0) from .env -- tip: 🔑 add access controls to secrets: https://dotenvx.com/ops
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  enable debug logging with { debug: true }
[dotenv@17.2.3] injecting env (0) from .env -- tip: 👥 sync secrets across teammates & machines: https://dotenvx.com/ops
Starting practice session...
Navigating to Words lesson...
Clicking Start button...
Session data captured
Challenge type: match
Solving Pair: "pork" <-> "cerdo"
Solving Pair: "pie" <-> "tarta"
Solving Pair: "to hate" <-> "odiar"
Solving Pair: "allergic" <-> "alérgico"
Solving Pair: "instead of" <-> "en vez de"
Solved 5 tokens.
Challenge type: extendedListenMatch
Solving Self-Match: "bye-challenge-tap-token"
Solving Self-Match: "instead of-challenge-tap-token"
Solving Self-Match: "intersection-challenge-tap-token"
Solving Self-Match: "selfish-challenge-tap-token"
Solving Self-Match: "for-challenge-tap-token look to"
Solving Self-Match: "pie-challenge-tap-token"
Solving Self-Match: "juice-challenge-tap-token"
Solving Self-Match: "honest-challenge-tap-token"
Solving Self-Match: "pork-challenge-tap-token"
Solving Self-Match: "allergic-challenge-tap-token"
Solving Self-Match: "hate-challenge-tap-token to"
Solving Self-Match: "sleepy-challenge-tap-token"
Solving Self-Match: "I-challenge-tap-token"
No active tokens found
Solved 13 tokens.
Challenge type: extendedMatch
Solving Pair: "juice" <-> "jugo"
Solving Pair: "bye" <-> "chao"
Solving Pair: "pork" <-> "cerdo"
Solving Pair: "selfish" <-> "egoísta"
Solving Pair: "honest" <-> "honesto"
Solving Pair: "to look for" <-> "buscar"
Solving Pair: "dryer" <-> "secador"
Solving Pair: "to hate" <-> "odiar"
Solving Pair: "article" <-> "artículo"
Solving Pair: "intersection" <-> "cruce"
Solving Pair: "breaks" <-> "parte"
Solving Pair: "those" <-> "esas"
Solving Pair: "I" <-> "yo"
Solving Pair: "instead of" <-> "en vez de"
Solving Pair: "allergic" <-> "alérgico"
Solving Pair: "pie" <-> "tarta"
Solving Pair: "thank you very much" <-> "mil gracias"
Solving Pair: "deodorant" <-> "desodorante"
Solving Pair: "sleepy" <-> "sueño"
Solving Pair: "(to) suckle" <-> "criar"
Solving Pair: "from which" <-> "de qué"
Solved 21 tokens.
Challenge type: extendedMatch
Error in loop: locator.getAttribute: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('button[data-test*="-challenge-tap-token"]').nth(2)

    at getVisibleTokens (/home/runner/work/Duolingo-bot/Duolingo-bot/src/utils/token.ts:16:29)
    at async solveMatchChallenge (/home/runner/work/Duolingo-bot/Duolingo-bot/src/utils/solver.ts:43:31)
    at async solveVisibleTokens (/home/runner/work/Duolingo-bot/Duolingo-bot/src/utils/solver.ts:29:16)
    at async file:///home/runner/work/Duolingo-bot/Duolingo-bot/src/practice.ts:87:37 {
  name: 'TimeoutError'
}
XP credited during session (50946 -> 50956). Session complete!
Session loop ended.
Session end. Streak: 1311, XP: 50946, lastExtended: 2026-11-10
Post-session streak: 1312, XP: 50956, lastExtended: 2026-11-11
✅ Session credited 10 XP; streak complete for 2026-11-11.
```
