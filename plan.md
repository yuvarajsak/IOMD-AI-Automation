# IOMD Codegen Automation Plan

## Purpose

This is the canonical execution plan for the IOMD TypeScript Appium automation framework.

For every future Codegen automation task, start from this file before making changes. Cross-check the user task against the current status, Codegen execution order, existing files, platform readiness, and known gaps. After implementing or executing a task, update this file with the new status, files changed, commands run, results, blockers, and next actions.

## Codegen Task Protocol

Status: Active

Use this workflow for every Codegen task:

1. Read `plan.md`.
2. Identify the matching Codegen test step from the execution order.
3. Inspect the relevant Codegen source files or screenshots before changing automation.
4. Check whether an existing feature, step definition, page object, or config already covers the request.
5. Reuse the framework patterns already present in `features/codegen`, `src/steps`, `src/pages`, and WebdriverIO config files.
6. Keep executable automation in this repo. Do not keep source automation in temp folders.
7. Update or add the feature file, step definitions, page object, config, and scripts needed for the requested task.
8. Run `npm run typecheck`.
9. Execute the relevant platform test when the app build and device/emulator are available.
10. Update this plan with completed actions, validation result, blockers, and the next item to automate.
11. Update the report under `/Users/ideas2it/Downloads/NodeApp` when a test is executed.

## Legacy Test Automation Protocol

Status: Active

Use this workflow for every legacy test case automation task:

1. Read `plan.md` before changing or running legacy automation.
2. Identify the source legacy feature, runner, page object, Java step, or migrated TypeScript step involved.
3. Record the legacy source path and the new or updated TypeScript framework path in this plan.
4. Keep legacy automation changes traceable by adding an entry under `Legacy Automation Tracking`.
5. Do not mix legacy behavior into Codegen flows unless the user explicitly asks for that migration.
6. If a legacy test case is migrated, mark whether it is fully migrated, partially migrated, blocked, or deprecated.
7. Run `npm run typecheck` after TypeScript framework changes.
8. Execute the relevant legacy or migrated test when the build and device are available.
9. Update this plan with command, result, blockers, and next action after execution.
10. Update the report under `/Users/ideas2it/Downloads/NodeApp` when a legacy or migrated legacy test is executed.

## Current Runtime Framework

Status: Active

Framework path:

```text
/Users/ideas2it/Downloads/i2iautomation copy/IOMD_TS_MobileAutomation
```

Codegen source:

```text
Codegen/steps
```

Current Step03 source of truth:

```text
Codegen/steps/step03_splash_onboarding/step.md
Codegen/steps/step03_splash_onboarding/snapshots
```

Current local iOS build:

```text
/Users/ideas2it/Downloads/NodeApp/IOMDAutofill.app
```

Expected future Android build:

```text
/Users/ideas2it/Downloads/NodeApp/IOMDAutofill.apk
```

## One-Command Runs

iOS Codegen onboarding:

```sh
npm run test:codegen:onboarding:ios
```

Android Codegen onboarding:

```sh
npm run test:codegen:onboarding:android
```

TypeScript validation:

```sh
npm run typecheck
```

## Codegen Execution Order

Status: Active

Follow the order from the local `Codegen/steps` folder:

1. `step01_android_base`
2. `step02_node_base`
3. `step03_splash_onboarding`
4. `step04_tabs_and_home_page`
5. `step05_assistant_tab`
6. `step06_email_screens`
7. `step07_forward_reply_email`
8. `step08_settings_import_emails`
9. `step09_offers_tab`
10. `step10_orders_tab`
11. `step11_import_passwords`
12. `step12_search_emails`
13. `step13_backup_restore`

## Implemented Coverage

### Codegen Step03 Splash Onboarding

Status: Implemented and executed for iOS, prepared for Android

Feature:

```text
features/codegen/step03-onboarding.feature
```

Step definitions:

```text
src/steps/codegen-onboarding.steps.ts
```

Page object:

```text
src/pages/codegen-onboarding.page.ts
```

iOS config:

```text
wdio.codegen.onboarding.ios.conf.ts
```

Android config:

```text
wdio.codegen.onboarding.android.conf.ts
```

Covered flow:

1. Launch app fresh.
2. Continue from splash or intro screen.
3. Detect onboarding screen containing `Connect Gmail`.
4. Click `Skip` instead of continuing with Gmail.
5. Verify `Create your Commerce Token` screen.
6. Verify commerce token input.
7. Verify create-token controls: subtitle, Create CTA, and `Already a Node user`.
8. Enter token prefix `codexqa`.
9. Verify token field value contains `codexqa`.
10. Enter short visible validation prefix `tes` from the Codegen snapshot evidence.
11. Enter a unique `codex...` token prefix.
12. Submit Create Token.
13. Wait for loading or post-create success state.
14. Verify post-create success state containing `Your Commerce Token` / `Copy token`.

Covered Codegen snapshots:

- `Codegen/steps/step03_splash_onboarding/snapshots/01-splash.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/02-onboarding.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/03-onboarding.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/04-onboarding.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/05-onboarding.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/06-onboarding.png`

Pending Step03 snapshot coverage:

- `Codegen/steps/step03_splash_onboarding/snapshots/07-legal-terms-ios.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/08-legal-privacy-ios.png`

iOS result:

- Passed on 2026-05-07.
- Simulator: `codex-onboarding-iPhone15`.
- UDID: `F47E1EF9-7115-42DC-BC53-CBDF77BA9372`.
- Latest execution: 2026-05-07 14:58 IST.
- Command: `npm run test:codegen:onboarding:ios`.
- Result: 1 spec passed, 3 scenarios passed, 18 Cucumber steps passed.
- Duration: 00:02:57 total run time, 1m 9.2s spec time.

Android result:

- Not executed yet.
- Android Studio/emulator setup is pending.
- No Android device was attached when checked.
- APK was not present at `/Users/ideas2it/Downloads/NodeApp/IOMDAutofill.apk`.

## Android Readiness

Status: Config ready, execution blocked by local setup

Before running Android:

1. Install Android Studio.
2. Install or verify Android SDK and platform tools.
3. Create or start an emulator matching the config, or update the config to match the real emulator.
4. Place APK at `/Users/ideas2it/Downloads/NodeApp/IOMDAutofill.apk`, or update `wdio.codegen.onboarding.android.conf.ts`.
5. Verify a device appears with:

```sh
adb devices
```

Current Android defaults:

```text
deviceName: Android Emulator
platformVersion: 14
appPackage: com.iomd.i2iautofill
appActivity: .MainActivity
```

Update these values after the real APK/device is available if they differ.

## Known Issues And Decisions

- Legacy Applitools onboarding is not the source of truth for the Codegen skip-Gmail path.
- The correct onboarding path for the current Codegen task is `Skip` Gmail, then create Commerce Token.
- The current iOS UI shows the token suffix as `@qa.nodeconnects.com` for the local build.
- The token helper text is visible in Codegen snapshot `04-onboarding.png`, but this iOS build does not expose it as a stable accessibility element. Automation asserts the visible heading, subtitle, input, Create CTA, `Already a Node user`, and token input value instead.
- Keep source automation in this framework repo, not temp folders.
- If Appium port `4723` is busy, stop the old Appium/WebdriverIO process before rerunning.
- iOS config now passes the target UDID directly into simulator reset to avoid stale environment variables.
- Create-token success can take more than 10 seconds after the CTA click; Step03 waits up to 45 seconds for loading or success and up to 60 seconds for final success.

## Legacy Automation Tracking

Status: Active

Use this section whenever a legacy test case is automated, migrated, executed, fixed, deprecated, or blocked.

Current entries:

- Legacy Applitools onboarding remains separate from Codegen onboarding. The Codegen skip-Gmail Commerce Token flow is implemented in `features/codegen/step03-onboarding.feature`; legacy onboarding should only be changed when a user explicitly asks for that legacy case.

## Action Log

### 2026-05-07

Completed:

- Added Codegen onboarding feature for skip-Gmail Commerce Token flow.
- Added Codegen onboarding step definitions.
- Added shared iOS/Android page object selectors for the onboarding flow.
- Added iOS one-command config.
- Added Android one-command config.
- Added npm shortcuts for iOS and Android Codegen onboarding.
- Fixed iOS reset helper to accept the config UDID directly.
- Ran `npm run typecheck` successfully.
- Ran iOS Codegen onboarding successfully.
- Updated `/Users/ideas2it/Downloads/NodeApp/onboarding-test-report.md` with the passed iOS result.
- Executed first Codegen test case again with `npm run test:codegen:onboarding:ios`.
- Latest first test result: passed, 1 spec passed, 5 Cucumber steps passed, scenario time 7.6s, total run time 00:01:16.
- Added `Legacy Test Automation Protocol`.
- Added `Legacy Automation Tracking`.
- Confirmed the updated local `Codegen/steps/step03_splash_onboarding` folder is now the framework source of truth.
- Expanded `features/codegen/step03-onboarding.feature` to three scenarios:
  - `TC_01 - Skip Gmail import and reach commerce token creation`
  - `TC_02 - Validate commerce token screen controls`
  - `TC_03 - Create commerce token and verify post-create state`
- Expanded `src/pages/codegen-onboarding.page.ts` with create-token control, loading, failure, and post-create success selectors.
- Expanded `src/steps/codegen-onboarding.steps.ts` with validation, unique token creation, submit, loading, and success steps.
- Ran `npm run typecheck` successfully after the Step03 expansion.
- Ran `npm run test:codegen:onboarding:ios` successfully after the Step03 expansion.
- Latest Step03 expanded result: passed, 1 spec passed, 3 scenarios passed, 18 Cucumber steps passed, total run time 00:02:57.
- Updated `/Users/ideas2it/Downloads/NodeApp/onboarding-test-report.md` with the expanded Step03 iOS result.

Blocked:

- Android execution is waiting for Android Studio/emulator and an APK.

## Next Actions

Status: Pending

1. After Android Studio is installed, verify `adb devices`.
2. Place the Android APK at `/Users/ideas2it/Downloads/NodeApp/IOMDAutofill.apk`.
3. Confirm Android `appPackage` and `appActivity`; update `wdio.codegen.onboarding.android.conf.ts` if needed.
4. Run `npm run test:codegen:onboarding:android`.
5. Update this `plan.md` with Android result and blockers.
6. Update `/Users/ideas2it/Downloads/NodeApp` report after Android execution.
7. Add Step03 legal-link assertions for Terms and Privacy snapshots (`07` and `08`) if the next task stays in onboarding.
8. Add Step03 persistence checks for onboarding completion / returning-user bypass when the framework has a stable app-data inspection hook.
9. Start `step04_tabs_and_home_page`.
10. Continue the remaining Codegen steps in execution order.

## Framework Rules

- Use Page Object Model.
- Use explicit waits.
- Prefer accessibility IDs/resource IDs when available.
- Keep selectors inside page objects, not feature files.
- Keep Cucumber steps readable and business-focused.
- Keep tests independent and reset app state between runs.
- Run typecheck after framework changes.
- Update this plan after every task.
