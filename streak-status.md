# Streak Status
Last run on: 2026-10-25 03:09:11 UTC

Status: FAILED - no verification result produced

## Practice output tail

```text

> duolingo-bot@1.0.0 practice /home/runner/work/Duolingo-bot/Duolingo-bot
> pnpm run exec-script src/practice.ts


> duolingo-bot@1.0.0 exec-script /home/runner/work/Duolingo-bot/Duolingo-bot
> node --loader ts-node/esm --experimental-specifier-resolution=node src/practice.ts

(node:2562) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
(node:2562) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  write to custom object with { processEnv: myObject }
[dotenv@17.2.3] injecting env (0) from .env -- tip: 🔐 encrypt with Dotenvx: https://dotenvx.com
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  override existing env vars with { override: true }
Starting practice session...
Navigating to Words lesson...
Clicking Start button...
Session data captured
Idle iteration 25: url=https://www.duolingo.com/practice-hub/words/practice
Idle iteration 50: url=https://www.duolingo.com/practice-hub/words/practice
Challenge type: match
Solving Pair: "cycling" <-> "ciclismo"
Solving Pair: "during" <-> "durante"
Solving Pair: "to jog" <-> "trotar"
Solving Pair: "to start" <-> "empezar"
Solving Pair: "physical" <-> "físico"
Solved 5 tokens.
Start/Review button detected mid-session; starting next round.
Error in loop: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /START|REVIEW/i })
    - locator resolved to <button dir="ltr" lang="en" translate="no" aria-disabled="true" data-test="start-challenge-tap-token to" class="_2wryV _3fmUm _2V6ug _1ursp _7jW2t notranslate _3ZtW_ _2O7Ua _3U5_i _1YHBP _3Ymqr">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    58 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms

    at /home/runner/work/Duolingo-bot/Duolingo-bot/src/practice.ts:131:39 {
  name: 'TimeoutError'
}
Challenge type: extendedListenMatch
Solving Self-Match: "foot-challenge-tap-token"
Solving Self-Match: "than-challenge-tap-token"
Solving Self-Match: "physical-challenge-tap-token"
Solving Self-Match: "through-challenge-tap-token"
Solving Self-Match: "breathe-challenge-tap-token to"
Solving Self-Match: "cycling-challenge-tap-token"
Solving Self-Match: "during-challenge-tap-token"
Solving Self-Match: "watermelon-challenge-tap-token"
Solving Self-Match: "wedding's-challenge-tap-token"
Solving Self-Match: "(we) going-challenge-tap-token were"
Solving Self-Match: "at home-challenge-tap-token"
Solving Self-Match: "jog-challenge-tap-token to"
Solving Self-Match: "start-challenge-tap-token to"
No active tokens found
Solved 13 tokens.
Start/Review button detected mid-session; starting next round.
Error in loop: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /START|REVIEW/i })
    - locator resolved to <button dir="ltr" lang="en" translate="no" aria-disabled="true" data-test="start-challenge-tap-token to" class="_2wryV _3fmUm _2V6ug _1ursp _7jW2t notranslate _3ZtW_ _2O7Ua _3U5_i _1YHBP _3Ymqr">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    58 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms

    at /home/runner/work/Duolingo-bot/Duolingo-bot/src/practice.ts:131:39 {
  name: 'TimeoutError'
}
Challenge type: extendedMatch
Solving Pair: "during" <-> "durante"
Solving Pair: "physical" <-> "físico"
Solving Pair: "victim" <-> "víctima"
Solving Pair: "watermelon" <-> "sandía"
Solving Pair: "story" <-> "cuento"
Solving Pair: "tuna" <-> "atún"
Solving Pair: "stove" <-> "estufa"
Solving Pair: "to start" <-> "empezar"
Solving Pair: "at home" <-> "en casa"
Solving Pair: "foot" <-> "pata"
Solving Pair: "than" <-> "que"
Solving Pair: "through" <-> "por la"
Solving Pair: "cycling" <-> "ciclismo"
Solving Pair: "jungle" <-> "selva"
Solving Pair: "to jog" <-> "trotar"
Solving Pair: "(we) were going" <-> "íbamos"
Solving Pair: "musical" <-> "musical"
Solving Pair: "wedding's" <-> "boda"
Solving Pair: "employee" <-> "empleado"
Solving Pair: "key" <-> "llave"
Solving Pair: "to breathe" <-> "respirar"
Solved 21 tokens.
Challenge type: extendedMatch
XP credited during session (50340 -> 50350). Session complete!
Session loop ended.
Session end. Streak: 1295, XP: 50340, lastExtended: 2026-10-23
Post-session streak: 1296, XP: 50350, lastExtended: 2026-10-25
✅ Session credited 10 XP; streak complete for 2026-10-25.
```
