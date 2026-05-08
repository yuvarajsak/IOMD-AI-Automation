# Step02_Node_Base: Node Platform Base Layer

## Objective
Build the shared Node app base capabilities used by later UI steps.

## Scope
1. Firebase setup:
- Implement QA Firebase linking using `Codegen/steps/step02_node_base/references/firebase-linking-qa.md`.
- Keep QA as active debug validation flavor.

2. Remote Config foundation:
- Add Remote Config dependency.
- Initialize + fetch/activate lifecycle.
- Provide shared manager/helper for key-based reads.
- Enforce remote-only text for scopes where iOS uses Remote Config.

3. API layer baseline:
- Build reusable API client structure for onboarding/token and later endpoints.
- Include required Node/Firebase headers (for example `x-node-token`, `x-firebase-appcheck` where applicable).
- Keep emulator vs real-device App Check behavior aligned with iOS parity requirements.

4. Persistence foundation for parity:
- Add Room baseline where iOS persists payloads in Core Data.
- Persist Remote Config payloads to Room when iOS persists equivalent payloads (example: `thankyou_email.mail`).
- Data should be rendered from Room when iOS renders from Core Data for the same scope.

5. Localization and resources baseline:
- Extract strings from iOS localization sources.
- Copy iOS image assets needed for onboarding/home baseline.
- Copy required iOS fonts and wire Android typography resources.
- Apply Android-safe resource naming (lowercase, underscore, no `@`).

## Verification Requirements
- `./gradlew help`
- `./gradlew :app:assembleQaDebug`
- Firebase/Remote Config wiring compiles and runs on QA
- API layer requests execute with expected headers in QA flow
- Room persistence path compiles and is readable from UI layer where applicable
- `Codegen/docs/validation/checklist.md` checks satisfied

## Completion
After Step02 passes, wait for approval and continue to:
`Codegen/steps/step03_splash_onboarding/step.md`

## Node Base Learnings (2026-03-04)
- QA Firebase linking should avoid `applicationIdSuffix` mismatches against QA `google-services.json`.
- App Check debug token allowlisting is required for strict QA backend enforcement.
- For simulator/emulator parity, allow `x-node-token` path when App Check token is unavailable; keep strict requirement on real devices.
- Do not hardcode fallback UI text for iOS Remote Config scopes.
- RC validation mode: keep Android Remote Config reads live-only (no local defaults) when explicitly validating real-time Firebase coverage, so missing keys are visible immediately instead of masked by defaults.
- Root Cause Analysis (2026-03-04): `fetchAndActivate()` returning `activated=false` is normal if local cached values already match the server; it does not mean the fetch failed. However, for fresh validation of new config changes, use `adb shell pm clear <package_name>` to force `activated=true` and confirm fresh remote sync.

## Welcome Email WebView Bridge Learning (2026-03-05)
- iOS welcome email rendering path is not plain static HTML only; it depends on WebView JS-native communication in `EmailVC`.
- For new welcome email flow (`isNewWelcomeEmail == true`), iOS registers a script message handler named `getFromNodeApp` and serves dynamic values back into page JS:
  - JS request `tokenizedEmail` -> native callback `window.receiveEmail(...)`
  - JS request `profilePicture` -> native callback `window.receiveProfilePicture(...)`
- iOS also handles custom in-page action URLs via `WKNavigationDelegate` (`iomd-app://...`) for `share-btn`, `back-btn`, and `copy-my-token`.
- Android parity foundation rule: when persisting and rendering `thankyou_email.mail` from Remote Config, preserve this interactive contract (JS bridge + custom-scheme actions), not just the HTML body text.

## Regeneration Verification Update (2026-03-05)
- Recreated Step02 baseline wiring in fresh Android project:
  - QA Firebase plugin integration and BOM dependencies
  - QA-only `google-services.json` copied to `Android/app/src/qa/google-services.json`
  - Remote Config initialization (`fetchAndActivate`) at app startup
  - API baseline with required header path (`x-node-token`, conditional `x-firebase-appcheck`)
  - Room baseline added for persisted welcome-email payload fields
- Verification commands:
  - `./gradlew help` -> PASS
  - `./gradlew :app:assembleQaDebug` -> PASS

## Regeneration Learning (2026-03-05)
- Running Gradle inside sandbox failed on local socket/file-lock restrictions; using workspace-local `GRADLE_USER_HOME` and elevated execution was required for reproducible validation.

## Revisit Update (2026-03-05)
- Asset sourcing rule tightened for Node base + later steps: image requirements must resolve from iOS assets first and be copied directly into Android resources with Android-safe naming.
- This rule now applies globally (see workspace `Codegen/AGENTS.md`) and supersedes placeholder/icon approximation in parity-sensitive UI scopes.

## Cross-Project Verification Learnings (2026-03-05)
- iOS parity verification for this project must use CocoaPods workspace build, not project-only build:
  - preferred command pattern: `xcodebuild -workspace iOS/IOMDAutofill.xcworkspace -scheme <scheme> ...`
  - `xcodebuild -project iOS/IOMDAutofill.xcodeproj ...` can produce false-negative failures for pod modules (for example Firebase headers/modules).
- Before declaring iOS parity/build failure in CocoaPods-backed scopes, run `pod install` in `iOS/` and re-run workspace build once.
- Cross-platform runtime verification rule:
  - remote-config/UI text checks must be validated from running app state, not code inspection only.
  - for Android UI automation, avoid hardcoded tap coordinates as source-of-truth; derive live hit targets via UI dump (`adb shell uiautomator dump`) when interaction points drift by state/device.

## Cross-Project Remote Config Contract Learning (2026-03-05)
- Tutorial payload parity is a base-layer contract, not Step04-only UI logic.
- Android tutorial model/parsing must preserve iOS Remote Config fields used for runtime rendering/navigation:
  - `title`, `subtitle`, `cta`, `link`, `mode`, `thumbnail`, `canDismiss`, `image`, `iconName`.
- If any iOS-used tutorial field is dropped at Node base parsing/model level, downstream screens will regress into hardcoded behavior; treat this as Node base parity failure.
