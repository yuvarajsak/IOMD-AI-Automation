## Canonical Snapshot Paths (Nearby)
- `Codegen/steps/step03_splash_onboarding/snapshots/01-splash.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/02-onboarding.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/03-onboarding.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/04-onboarding.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/05-onboarding.png`
- `Codegen/steps/step03_splash_onboarding/snapshots/06-onboarding.png`

# Step03_Splash_Onboarding: Splash and Onboarding Flow Implementation

## Objective
Implement the initial user entry flow (Splash and Onboarding) by mirroring the logic and design found in the iOS codebase.
`Codegen/docs/validation/checklist.md` must be respected throughout code generation.
Implementation order rule: generate UI from iOS code/assets first; use snapshots at the end as reference for parity verification and fine-tuning.

## Task Details
1. **UI Implementation**:
   - **Splash Screen**: Replicate the logic from the iOS Splash controller, including any animations, versioning displays, and navigation delays.
   - **Onboarding Welcome**: Implement the welcome screen using branding elements and messaging extracted from the iOS project's assets and localized strings.
   - **Create Commerce Token**: Implement the token creation UI, mirroring the validation logic and domain suffixes defined in the iOS onboarding flow.

2. **Styling & Assets**:
   - Apply the brand's visual identity by referencing the iOS project's theme colors and image assets. **Do not hardcode hex values or local paths.**
   - Use localization, assets, and fonts already established in Step02 Node Base.
   - If onboarding-specific assets/strings are still missing, add only the delta required for this flow.
   - **Remote Config Text Parity**: For any Step03 text read from Firebase Remote Config on iOS, Android must read from Firebase Remote Config using the corresponding key-based source.

3. **Data & Navigation**:
   - Implement state management using DataStore to track onboarding completion, mirroring the iOS app's persistence logic.
   - On Create Token action, call the token-creation API through the Step02 Node Base API layer before marking onboarding complete.
   - Reuse App Check / `x-node-token` behavior already defined in Step02 Node Base; do not create parallel header logic in this step.
   - Configure the `NavHost` to handle transitions between Splash, Onboarding, and the Main application entry point.

## Verification Requirements
- Run programmatic sync-equivalent command `./gradlew help` before compile validation.
- App must launch to the Splash screen first.
- Splash must transition based on the existing onboarding state (mirrored from iOS logic).
- Token creation must persist state and navigate correctly according to the original flow.
- **MANDATORY**: Create Token must invoke the environment-resolved backend endpoint (iOS parity: `POST /users`, or `POST /user/auth` when existing-token login flow applies) before success navigation/state completion.
- Run `./gradlew clean assembleDebug` to ensure no stale build artifacts interfere.
- **MANDATORY**: Execute and satisfy all applicable checks in `Codegen/docs/validation/checklist.md` (including snapshot parity checks).
- **MANDATORY**: Validate Remote Config text parity for Step03 scope wherever iOS reads from Remote Config.

## Completion
Once verified and `EachStepValidationChecklist.txt` checks are satisfied, summarize the implementation and wait for user confirmation before starting `Step04_TabsAndHomePage/Step04_TabsAndHomePage.txt`.

## Step Completion Checklist
- [ ] Verify Splash -> Welcome -> Create Token -> Home navigation behavior
- [ ] Verify onboarding persistence behavior using DataStore keys (`OnboardCompleted`, `consumeronboardState`)
- [ ] Verify migrated iOS assets are used on Step03 screens (no placeholder assets)

## Implementation Findings (2026-03-03)
- **Flow Implemented and Verified**: Splash -> Welcome -> Create Token -> Token Created -> Home placeholder.
- **Splash Timing Parity Applied**:
  - Onboarding incomplete: ~2s delay then onboarding flow.
  - Onboarding complete: ~1s delay then app entry.
- **Token Validation Parity Applied**:
  - Regex: `^[A-Za-z0-9._-]{4,}$`
  - Max length: 25
  - Suffix from environment domain (iOS parity through build config mapping).
- **Persistence Parity Applied**:
  - DataStore keys include `OnboardCompleted` and `consumeronboardState`.
- **Create API Parity Applied**:
  - Create button triggers environment-based token API call prior to success completion.
  - Base URL follows flavor/environment mapping.
- **Asset Migration Applied**:
  - Required iOS assets copied from `Assets.xcassets` and renamed to Android-safe lowercase names.

## Implementation Learnings Addendum (2026-03-03)
- **Snapshot-End Parity Overrides Applied**:
  - Splash visual logo should use the black `node` mark appearance from snapshot (`Intro_Image`-based visual) rather than the white splash logo variant.
  - Splash version string must match snapshot formatting/content for the implemented build (record exact value in findings when snapshot requires it).
- **Welcome Screen Parity Rules**:
  - Use flat light-gray page background (no white bottom card container for the snapshot-matched variant).
  - CTA must be a **gradient pill** with inline star icon.
- **Create Token Screen Parity Rules**:
  - Include top-left back icon in this screen state.
  - Domain suffix should render with `@` as part of visible suffix text (e.g., `@qa.nodeconnects.com`), not split into icon + suffix text.
  - Hide legal text block on the create-token snapshot-matched screen state.
- **Gradient Button Composition Rule**:
  - For text + icon alignment in Compose gradient buttons, use one row with `verticalAlignment = CenterVertically` and explicit spacing.
  - Avoid baseline alignment for non-text icons (`alignByBaseline` on image/icon causes visible misalignment).

## Clean-Rerun Learnings (2026-03-03)
- **Placeholder Replacement Rule**:
  - If Step01 introduced temporary drawable placeholders (for compile safety), Step03 must remove/replace them when real iOS assets are copied.
  - Avoid same-name mixed resource types (for example both `drawable/foo.xml` and `drawable/foo.png`) to prevent ambiguous resource resolution and drift.
- **Non-Blocking Warning Note**:
  - Compose `ClickableText` currently emits deprecation warnings but does not block build output.
  - For future cleanup, migrate to `Text`/`BasicText` with `LinkAnnotation` while preserving snapshot parity.

## Compose Localization Callback Learning (2026-03-03)
- **Observed Compile Failure**:
  - Calling `stringResource(...)` inside non-composable callbacks (`onClick`, `onValueChange`) in Compose screens fails Kotlin compilation.
- **Stabilized Rule**:
  - Resolve localized strings at the top of the composable (for example into local `val` variables), then reuse those values inside callbacks/state updates.

## Snapshot Comparison Update (2026-03-03)
- **Pixel-by-Pixel Review Completed** for:
  - `Codegen/steps/step03_splash_onboarding/snapshots/01-splash.png`
  - `Codegen/steps/step03_splash_onboarding/snapshots/02-onboarding.png`
  - `Codegen/steps/step03_splash_onboarding/snapshots/03-onboarding.png`
- **Parity Fixes Applied**:
  - Updated Splash and onboarding backgrounds to the snapshot light-gray surface.
  - Matched splash footer formatting (`Patented` line break + `Version 3.0.52.1` formatting) and logo sizing.
  - Updated welcome footer content to the legal line with underlined `Terms of Service` and `Privacy Policy`.
  - Tuned gradient button palette/width to match snapshot style.
  - Updated create-token screen spacing/background and kept snapshot-matched elements (back icon, `@` in domain suffix, hidden legal block).

## API/Auth Learnings (2026-03-04)
- Create Token API parity requires both headers used by iOS networking flow:
  - `x-node-token` (environment token)
  - `x-firebase-appcheck` (Firebase App Check token)
- Missing required headers can return `403 Forbidden` from QA backend even when payload format is correct.
- For debug QA builds using Firebase Debug App Check provider, ensure backend/Firebase App Check debug token allowlisting is configured when strict enforcement is enabled.

## Runtime Troubleshooting Learnings (2026-03-04)
- Verified failure path for create-token in QA debug when App Check is not allowlisted:
  - `AppCheck` returns `403 App attestation failed`
  - fallback refresh may return `Too many attempts`
  - `/users` call is aborted due to missing App Check token.
- Added API diagnostic log stream for reproducible validation:
  - `adb logcat -s IOMD_API`
- Temporary unblock mode (active in current Android code):
  - Create button can be configured to bypass API and navigate to Home for UI progression/testing.
  - This is a temporary deviation and must be reverted before declaring Step03 API parity complete.

## UX Re-Verification (2026-03-04)
- Re-captured and compared Step03 states from clean app data:
  - Splash
  - Welcome
  - Create Token
- Visual parity status:
  - Splash: close to snapshot, including centered brand mark and footer lines.
  - Welcome: close to snapshot with gradient CTA and legal text links.
  - Create Token: close to snapshot for core layout and button geometry.
- Functional parity status:
  - **Not final-pass** for Step03 API behavior because current temporary bypass navigates to Home without calling create-token API.
- Gate status:
  - Snapshot/UI review done for captured states.
  - API parity gate remains open until temporary bypass is removed and App Check-backed create flow succeeds.

## QA Default Run Pinning (2026-03-04)
- To avoid accidental `devDebug` launches during Step03 verification, debug variant generation is pinned to QA only in Gradle (`qaDebug` enabled; `devDebug`/`prodDebug` disabled).
- Firebase config scope for this pinning setup:
  - Keep `Android/app/src/qa/google-services.json`.
  - Do not use fallback `Android/app/google-services.json`.
- Step03 verification commands under this setup:
  - `./gradlew help`
  - `./gradlew clean assembleQaDebug`
- If onboarding state previously completed, clear app data before checking Create Token suffix visibility:
  - `adb shell pm clear com.iomd.android.i2iautofill`

## App Check Emulator Fallback Learning (2026-03-04)
- iOS parity for simulator-style runs requires Create Token API fallback behavior:
  - If Firebase App Check token is unavailable on emulator/simulator, continue request using `x-node-token` only.
  - If App Check token is unavailable on real device, keep request blocked and surface App Check error.
- Emulator detection must include modern Android emulator identifiers (for example `sdk_gphone*`, `ranchu`, `goldfish`, `emu*`) to ensure fallback activates on current AVD images.
- Diagnostic confirmation during Step03 API verification:
  - `adb logcat -s IOMD_API`
  - verify log path indicates emulator fallback and request dispatch without `x-firebase-appcheck` header when token fetch fails.

## Onboarding State + Welcome Email Loading Learning (2026-03-05)
- In iOS, onboarding state `welcomeEmailLoaded` is set after loading/saving welcome mail data (from Remote Config `thankyou_email.mail` or bundle fallback) through `EmailViewModel.loadLocalEmail()`.
- This state is part of gating the post-create-token experience; it should not be treated as a cosmetic-only flag.
- Android parity note for future steps: onboarding completion and welcome-email availability should stay coupled so Home/Business detail opens an actual renderable welcome email payload.

## Regeneration Verification Update (2026-03-05)
- Recreated Step03 flow in fresh Android codebase:
  - Splash -> Welcome -> Create Token navigation path
  - DataStore keys retained: `OnboardCompleted`, `consumeronboardState`
  - Create token input constraints (regex + max length 25)
  - Create token action calls API baseline and persists onboarding completion on success
- Verification commands:
  - `./gradlew help` -> PASS
  - `./gradlew clean assembleDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS
  - Emulator launch (`adb shell am start ...MainActivity`) -> PASS
- Runtime evidence captures:
  - `/tmp/iomd_splash.png`
  - `/tmp/iomd_welcome.png`
  - `/tmp/iomd_create.png`

## Regeneration Gate Status (2026-03-05)
- Step03 strict snapshot pixel-parity gate remains OPEN for manual pixel-by-pixel review against `Codegen/steps/step03_splash_onboarding/snapshots/*`.

## Snapshot Validation Pass (2026-03-05 - Post-Regeneration)
- Captured runtime Step03 states on QA emulator:
  - `/tmp/iomd_step03_01_splash.png`
  - `/tmp/iomd_step03_02_welcome.png`
  - `/tmp/iomd_step03_03_create.png`
- Pixel parity verdict vs provided Step03 snapshots (`01..03`) -> **FAIL**.
- Major mismatches observed:
  - Splash logo/wordmark and footer text formatting differ from snapshot.
  - Welcome screen copy, logo placement, CTA styling, and legal footer content differ.
  - Create-token screen iconography, heading text, token input composition, CTA style, and footer link state differ.

## Temporary Traversal Exception (2026-03-05)
- Added emulator-only fallback in create-token API path to allow post-onboarding traversal for Step04 capture validation when backend request is not successful in emulator environment.
- This is for validation traversal only and must be removed/reconciled before final API parity signoff.

## Step03 UX Fix Pass (2026-03-05)
- Implemented a dedicated Step03 visual pass in Compose for all snapshot-mapped onboarding states:
  - Splash (`node✦` center + footer copy layout)
  - Welcome (headline/body/legal layout + gradient Continue CTA)
  - Create Token (back action, helper text variations, gradient Create CTA)
  - Loading modal (`Just a moment` + spinner)
  - Post-create celebration overlay on Home (token card + center confirmation block + gradient CTA)
- Updated onboarding navigation to preserve creation token and trigger one-time celebration state after successful create.
- Captured refreshed Step03 evidence set:
  - `/tmp/step3_final_01.png`
  - `/tmp/step3_final_02.png`
  - `/tmp/step3_final_03.png`
  - `/tmp/step3_final_04.png`
  - `/tmp/step3_final_05.png`
  - `/tmp/step3_final_06.png`

## Step03 UX Residual Delta (2026-03-05)
- Snapshot parity is now significantly closer, but strict pixel-level signoff is still not final due to remaining minor deltas:
  - Create-token icon illustration still uses Compose icon approximation instead of exact iOS bag+shield art.
  - Small spacing/typography differences remain in create-token and success-overlay compositions.

## Revisit Update (2026-03-05 - Create Page)
- Implemented requested Create-token UX fixes:
  - Added guaranteed loading modal on Create tap with minimum visible duration.
  - Replaced Create page top illustration with exact iOS asset (`n_createtoken_new` -> Android `n_createtoken_new.png`).
  - Replaced onboarding wordmark and CTA diamond icon with iOS assets (`Intro_Image`, `diamondWhite`).
- Verification evidence for this fix pass:
  - Create page image parity capture: `/tmp/step3_req_create.png`
  - Loading-on-tap capture: `/tmp/step3_loading_fastcap.png`

## Implementation Update (2026-03-05 - Token/Data Parity Hardening)
- Create-token success now persists full tokenized email (`token@<env-domain>`) into DataStore for downstream Step04 parity (iOS `getCurrentTokenizedEmail` equivalent flow target).
- Welcome-email persistence source now uses parsed Remote Config `thankyou_email` JSON payload (mail/body/subject path) with fallback values, instead of only flat string-key fallback reads.
- This keeps onboarding-created identity and welcome-email payload consistent for Room-backed detail rendering in Step04.

## Recovery Update (2026-03-06)
- Reapplied create-token API parity after workspace recovery:
  - endpoint mapping switched to nodemy `/api/v1` flavor URLs,
  - `/users` payload parity set to `email + password`,
  - success gate is strict `HTTP 200` only.
- Reapplied iOS parity auth header behavior:
  - emulator: only `x-node-token`,
  - real device: include `x-firebase-appcheck` and fail when unavailable.
- Reapplied iOS-style password format generation:
  - `<emailPrefix>_<12 random alphanumeric mixed-case chars>`.
- Added failure-only request/response diagnostics for onboarding API alert path.
- Full module-wise notes captured in:
  - `Codegen/docs/learnings/2026-03-06-android-modulewise-recovery.md`
