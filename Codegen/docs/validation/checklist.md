# Step Validation Checklist (Mandatory End-of-Step Validation)

## Purpose
This file is the single validation gate for every `Codegen/steps/stepXX_<name>/step.md`.  
A step is marked passed only when all applicable checks below are satisfied.

## Universal Checks (Every Step)
1. **Programmatic Sync Pass**:
   - Run `./gradlew help` as sync-equivalent before build command.
   - If dependency/plugin mismatch is suspected, run `./gradlew --refresh-dependencies help`.
2. **Build Pass**:
   - Run required Gradle command for the step (minimum: `./gradlew clean assembleDebug` unless step states equivalent/stricter).
   - Build must pass without errors.
3. **Run Readiness**:
   - App must launch without crash for the implemented flow.
4. **Scope Integrity**:
   - iOS folder remains unchanged.
   - Only intended Android/docs changes are made.
5. **Learnings Update**:
   - Append newly discovered, reproducible learnings to the corresponding `Codegen/steps/stepXX_<name>/step.md` (append-only).
6. **Verification Evidence Logged**:
   - Record verification outcome in the active step file summary/findings (for example build status and, when UI is in scope, snapshot-comparison completion).
7. **Snapshot Gate (When Snapshots Exist)**:
   - If a step provides one or more snapshots, pixel-by-pixel comparison is mandatory before the step can be marked complete.
   - This gate is strict and cannot be skipped.
8. **Remote Config Text Parity (When Text Is In Scope)**:
   - If iOS reads any UI/UX text from Firebase Remote Config in the implemented scope, Android must read the same text from Firebase Remote Config as well.
   - Introducing new hardcoded Android-only text for such scope is a fail unless iOS source uses a hardcoded equivalent.
   - If iOS persists that Remote Config payload into Core Data and renders UX from local DB, Android must persist equivalent fields into Room and render from Room for the same scope.

## UI / UX Parity Checks (When UI is in Scope)
1. Implement UI from iOS code/assets first, then compare implemented Android screens against provided step snapshots in `Codegen/steps/`.
2. **MANDATORY Pixel-by-Pixel Check**:
   - Perform a pixel-by-pixel comparison between each provided snapshot and the corresponding rendered Android screen.
   - Any visual mismatch must be treated as a fail and fixed before marking the step complete.
   - For any step with snapshots, completion is blocked until this check is done and all mismatches are resolved.
3. Verify:
   - typography size/weight/line-height
   - spacing and layout structure
   - icon/image asset identity
   - button shape style and geometry (for example exact corner radius, pill, square, rectangle with sharp edges) per step example/snapshot
   - button gradient/fill and content alignment
   - text content/casing
   - secondary visibility states (e.g., legal text, back icon)
4. If iOS source and snapshot appear to conflict, keep iOS code/assets as the primary implementation source and use snapshots as end-state reference for visual tuning; document the conflict in `Codegen/steps/stepXX_<name>/step.md` findings.
5. **Generic Auto-Traversal Snapshot Pass (All UI Steps)**:
   - Immediately after UI generation for a step, automatically launch Android app and traverse the implemented step flow (using scripted interactions where feasible).
   - Capture runtime screenshots for each snapshot-mapped state and compare against step snapshots.
   - Apply fixes iteratively and rerun traversal until automated visual match is at least **90% minimum acceptance** for most states; **target is always 100% parity**.
   - If 100% is not reached, document exact blockers/deltas and continue parity fixes in subsequent pass.
   - After automated pass, complete manual parity verification and record remaining deltas in the step findings.

## Backup/Restore Mandatory Checks (When Backup/Restore Is In Scope)
1. Backup payload parity:
   - Android backup must include Room DB data equivalent to iOS Core Data scope for that flow.
   - Android backup must include secure-store data equivalent to iOS Keychain scope used in restore.
2. Cross-instance restore pass:
   - Create backup in source app instance/device.
   - Import same backup into a separate fresh instance/device (or cleared app state).
   - Restore must complete successfully and preserved records/tokens must be verifiably available post-restore.
3. Snapshot parity for flow states:
   - Backup/restore step cannot pass until every provided iOS flow snapshot has a compared Android runtime state.
   - Record per-screen match percentage and the final aggregate percentage in the step findings.
4. Evidence requirement:
   - Keep reproducible evidence for backup path, restore import path, and restored-state checks (screenshots + verification notes/commands).

## Flavor / Config Checks (When Build Config is in Scope)
1. Flavor setup must avoid AGP flavor/build-type name collision (`release` flavor name is not allowed).
2. Use `dev`, `qa`, `prod` where `prod` maps iOS release-environment values.
3. Confirm version/runtime compatibility pins remain intact.
4. Confirm Firebase Remote Config setup remains valid (dependency and initialization/fetch lifecycle) when remote-config-backed text is used.
5. Confirm Android app version parity with iOS:
   - Android `versionName` == iOS `CFBundleShortVersionString`
   - Android `versionCode` aligns with iOS `CFBundleVersion` for the active parity target.
   - Expected workflow: set parity in Step01; in subsequent steps this is a drift-check unless iOS version/build changed.

## 16 KB Compatibility Checks (When APK Distribution is in Scope)
1. Build target flavor APK and verify the default output APK (`app-<flavor>-debug.apk` or release equivalent) passes `zipalign -c -P 16 -v 4`.
2. If explicit alignment tasks are used (`alignDevDebug16k`, `alignQaDebug16k`, `alignProdDebug16k`), verify aligned artifact also passes `zipalign -c -P 16 -v 4`.
3. If alignment fails, step remains fail.

## Pass/Fail Rule
- **Pass**: All applicable checks are satisfied and recorded in step summary.
- **Pass Condition for Snapshot Steps**: If snapshots exist for a step, pass is allowed only after pixel-by-pixel verification is completed for every snapshot-mapped screen.
- **Fail**: Any one applicable check is unresolved.

## Temporary Exception Learning (2026-03-04)
- If a temporary bypass is introduced to unblock QA progression (for example skipping an API call due to external dependency outage), it must be:
  - explicitly recorded in the active `Codegen/steps/stepXX_<name>/step.md` findings/learnings,
  - treated as a temporary exception only,
  - reverted before final step parity signoff when API behavior is in scope.

## Icon Parity Learning (2026-03-04)
- Snapshot parity checks should explicitly include icon semantics for top bar and segment chips (for example, chat-bubble vs mail-envelope, shield/check indicator on business safety chip), not only icon size/spacing.
- For remote-config-driven tutorial lists, parity validation must confirm icon assets for **all visible rows** (including scrolled/lower rows), not just first-screen cards.

## RC + Detail Flow Learning (2026-03-05)
- For Step04 home parity, verify both remote-config and local-persisted detail states: tutorial cards from `app_preferences.tutorial_preferences.tutorial_in_home` and welcome-email detail from Room/CoreData-equivalent persistence.
- Snapshot checks must include navigation parity, not only static screens: Home -> Business Detail -> Email Detail and back behavior (including bottom-tab visibility rules) are part of pass criteria.

## Step04 Blocking Rule: Welcome Email Runtime Parity (2026-03-05)
- Step04 cannot pass if welcome-email detail is a static placeholder when Room-backed HTML payload exists.
- Required runtime checks:
  - Room observe/read path supplies welcome-email detail payload shown in Step04 detail flow.
  - WebView JS-native bridge parity is active for `getFromNodeApp` request handling.
  - Custom-scheme actions `iomd-app://.../back-btn`, `.../share-btn`, and `.../copy-my-token` are intercepted and mapped to Android actions.
- If any required runtime check above fails, Step04 status is `OPEN/FAIL` regardless of screenshot closeness.

## WebView Bridge Parity Learning (2026-03-05)
- When iOS email/welcome-email UX uses WebView JS-native communication, Android parity validation must include bridge behavior checks, not only visual HTML rendering.
- Minimum parity checks for welcome-email scope:
  - JS-to-native request channel exists (iOS: `getFromNodeApp`; Android equivalent required).
  - Native-to-JS callbacks provide tokenized email/profile picture when requested by page JS.
  - Custom in-email action URLs (`iomd-app://...`) are intercepted and mapped to app actions (`back`, `share`, `copy token`) with user feedback parity.
- Welcome-email token text should be resolved from persisted profile/token state (with deterministic fallback), and should never remain as a `"Loading email"` placeholder during normal UI parity checks.

## iOS Build Verification Learning (2026-03-05)
- For CocoaPods-backed iOS modules, parity verification must build/run from `.xcworkspace` (not only `.xcodeproj`) to avoid false failures from unresolved pod module/header linkage.
- Required check before reporting iOS parity failure due to pod modules:
  1. run `pod install` in `iOS/`,
  2. rerun with workspace command (`xcodebuild -workspace iOS/IOMDAutofill.xcworkspace ...`).

## Global Image Source Rule (2026-03-05)
- For any step where image/icon/illustration assets are in scope, Android must use the exact corresponding iOS assets.
- Random, generated, emoji, placeholder, or substitute images are not allowed when iOS source assets exist.
- If asset mapping is unclear, step remains open until exact iOS source asset is identified and applied.

## Shared Composable Sizing Learning (2026-03-06)
- Reusable visual composables used across screens (for example brand/wordmark components) must not hardcode size internally when size parity differs by screen state.
- Preferred pattern:
  - composable respects caller-provided `Modifier`,
  - each screen/state callsite sets explicit size required by its snapshot.
- Parity implication: internal size hardcoding can silently break header/logo alignment while other screens still look correct, causing partial snapshot drift.

## Non-negotiable Parity Rules
1. All Android code generation must be equivalent to iOS source behavior and structure: assets, fonts, logic, UI, API calls, and storage.
2. Generate code from equivalent iOS implementation first; use snapshots only at the end for parity verification/fine-tuning, not as the primary generation source.
3. No random/substitute assets; always read and map the equivalent iOS assets.
4. Code must be production standard.
5. For text/content parity: if text is in-app/static on iOS, keep Android in-app/static; if text is from Firebase Remote Config on iOS, Android must use Firebase Remote Config as well.
6. Match button visual design and geometry (shape, radius, fill/gradient, alignment) to iOS/snapshot parity.
7. Prefer running iOS and Android for direct UX comparison; otherwise use provided snapshots. Iterate with repeated fix-and-compare cycles until parity is achieved.
8. No arbitrary hardcoding or structure drift; map iOS UI/data structures to equivalent Android structures (for example list/table-style views should map to equivalent Android list/table patterns).
9. Match iOS Core Data models to equivalent Android Room models for the same persisted scope.

## Step Verification Trigger Rule
- On user command `verify step3` or `verify step4` (or equivalent), the verifier must execute both checks for the targeted step:
  - iOS-port parity check (code/behavior/data parity for that step scope), and
  - snapshot parity check against that step's `snapshots/` assets.
- Verification result must explicitly report both outcomes; reporting only one is a fail for this trigger.

## Post-Step Mandatory Verification Rule
- After every step development completion, explicit verification must be executed before step closure.
- Required verification outputs:
  - iOS-port parity result for that step scope.
  - Snapshot parity result for that step scope when snapshot assets are available.
- If required verification output is missing, step status is `OPEN/FAIL` until completed.
