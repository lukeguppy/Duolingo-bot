# Streak Status
Last run on: 2026-11-05 01:46:43 UTC

Status: FAILED - no verification result produced

## Practice output tail

```text

> duolingo-bot@1.0.0 practice /home/runner/work/Duolingo-bot/Duolingo-bot
> pnpm run exec-script src/practice.ts


> duolingo-bot@1.0.0 exec-script /home/runner/work/Duolingo-bot/Duolingo-bot
> node --loader ts-node/esm --experimental-specifier-resolution=node src/practice.ts

(node:2354) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
(node:2354) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
[dotenv@17.2.3] injecting env (0) from .env -- tip: 📡 add observability to secrets: https://dotenvx.com/ops
[dotenv@17.2.3] injecting env (0) from .env -- tip: 🛠️  run anywhere with `dotenvx run -- yourcommand`
[dotenv@17.2.3] injecting env (0) from .env -- tip: 👥 sync secrets across teammates & machines: https://dotenvx.com/ops
Starting practice session...
Navigating to Words lesson...
Direct Words page did not show Start/Review. Falling back to Practice Hub UI...
Practice hub collections: [
  'SpeakImprove your speaking skills with these phrases',
  'ListenBoost your listening skills with an audio-only session',
  'MistakesStart a personalized lesson to practice your mistakes30+',
  'WordsReview your Spanish vocabulary at any time',
  'StoriesReread a story to review words in context'
]
An error occurred: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('[data-test="practice-hub-collection-button"]').filter({ hasText: /^Words\b/i }).first() to be visible

    at startWordsLesson (/home/runner/work/Duolingo-bot/Duolingo-bot/src/utils/navigation.ts:30:27)
    at async file:///home/runner/work/Duolingo-bot/Duolingo-bot/src/practice.ts:55:29 {
  name: 'TimeoutError'
}
 ELIFECYCLE  Command failed with exit code 1.
 ELIFECYCLE  Command failed with exit code 1.
```
