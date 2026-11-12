# Streak Status
Last run on: 2026-11-12 02:30:39 UTC

Status: FAILED - no verification result produced

## Practice output tail

```text

> duolingo-bot@1.0.0 practice /home/runner/work/Duolingo-bot/Duolingo-bot
> pnpm run exec-script src/practice.ts


> duolingo-bot@1.0.0 exec-script /home/runner/work/Duolingo-bot/Duolingo-bot
> node --loader ts-node/esm --experimental-specifier-resolution=node src/practice.ts

(node:2568) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
(node:2568) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
[dotenv@17.2.3] injecting env (0) from .env -- tip: 🔐 prevent committing .env to code: https://dotenvx.com/precommit
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  override existing env vars with { override: true }
[dotenv@17.2.3] injecting env (0) from .env -- tip: 👥 sync secrets across teammates & machines: https://dotenvx.com/ops
Starting practice session...
Navigating to Words lesson...
Direct Words page did not show Start/Review. Falling back to Practice Hub UI...
An error occurred: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('[data-test="practice-hub-collection-button"]').first() to be visible

    at startWordsLesson (/home/runner/work/Duolingo-bot/Duolingo-bot/src/utils/navigation.ts:23:41)
    at async file:///home/runner/work/Duolingo-bot/Duolingo-bot/src/practice.ts:55:29 {
  name: 'TimeoutError'
}
 ELIFECYCLE  Command failed with exit code 1.
 ELIFECYCLE  Command failed with exit code 1.
```
