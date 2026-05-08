# Project Mirroring Principles (iOS to Android)

## Core Objective
Generate a functionally and visually identical Android application (Kotlin + Jetpack Compose) from the iOS source in `iOS/`.

## Step Order
1. `Codegen/steps/step01_android_base/step.md`
2. `Codegen/steps/step02_node_base/step.md`
3. `Codegen/steps/step03_splash_onboarding/step.md`
4. `Codegen/steps/step04_tabs_and_home_page/step.md`

## Fundamental Rules
1. iOS is immutable. Never modify `iOS/`.
2. Android is regeneratable. `Android/` can be deleted and rebuilt by following step files in order.
3. `Codegen/docs/validation/checklist.md` is mandatory for every step.
4. Implement from iOS source first; use snapshots for end-state parity validation.
5. If iOS uses Firebase Remote Config text in a scope, Android must use Remote Config for the same scope.
6. App version parity is mandatory: Android `versionName` and `versionCode` must mirror iOS `CFBundleShortVersionString` and `CFBundleVersion` for the aligned build target.
   - Set this in Step01 baseline.
   - In later steps, only verify no drift unless iOS version/build has changed.

# Step01_Android_Base: Android Foundation Only

## Objective
Create the minimal Android project foundation and toolchain baseline only.

## Scope Inclusions
1. Android project initialization:
- package name `com.iomd.android.i2iautofill`
- minSdk 29, targetSdk 34
- Kotlin + Compose project skeleton

2. Build/runtime version pins:
- Gradle wrapper `8.7`
- AGP `8.5.1`
- Kotlin `1.9.22`
- Compose compiler `1.5.10`
- Java compatibility `17`, JVM target `17`
- Gradle runtime JDK 21 preferred

3. Base architecture wiring:
- Navigation Compose scaffold with placeholder start destination
- Build flavors `dev`, `qa`, `prod` (`prod` maps iOS release)
- Keep `qa` as default flavor/run variant for validation

4. Android compatibility settings:
- `android.useAndroidX=true`
- `android.enableJetifier=true`

## Explicitly Out Of Scope (Moved To Step02 Node Base)
- Firebase setup/linking
- Remote Config fetch/usage wiring
- API layer/network headers/app-check behavior
- localization/string extraction
- copying iOS images/assets/fonts
- Room models for remote-config persisted payloads

## Verification Requirements
- `./gradlew help`
- `./gradlew :app:assembleQaDebug`
- App launches without crash with placeholder navigation
- `Codegen/docs/validation/checklist.md` checks satisfied

## Completion
After Step01 passes, wait for approval and continue to:
`Codegen/steps/step02_node_base/step.md`

## Implementation Learnings (Historical)
- Do not use flavor name `release`; use `prod`.
- `Theme.AppCompat.Light.NoActionBar` may be required as manifest theme fallback in this setup.
- Kotlin DSL syntax is required in Gradle Kotlin files (avoid Groovy-style entries).
- For local environment consistency, Android Studio JBR path may need to be pinned via `org.gradle.java.home`.

## Regeneration Verification Update (2026-03-05)
- Android folder was regenerated from scratch after deletion.
- Recreated Step01 foundation with required pins:
  - Gradle wrapper 8.7
  - AGP 8.5.1
  - Kotlin 1.9.22
  - Compose compiler 1.5.10
  - Java source/target 17
  - package `com.iomd.android.i2iautofill`
  - flavors `dev`, `qa`, `prod` with `qaDebug` retained for validation
  - AndroidX + Jetifier flags enabled in `gradle.properties`
  - Android version parity set from iOS target (`versionName=3.0.52`, `versionCode=1`)
- Verification commands:
  - `./gradlew help` -> PASS
  - `./gradlew :app:assembleQaDebug` -> PASS

## Regeneration Learning (2026-03-05)
- Host JDK `25.0.2` caused Kotlin Gradle script parsing failure (`IllegalArgumentException: 25.0.2`); pinning `org.gradle.java.home` to Android Studio JBR resolved Step01 validation.

## Revisit Update (2026-03-05)
- Added repo-level global rule in `Codegen/AGENTS.md`: whenever image/icon/illustration parity is required, Android must use the exact iOS asset source; no random/placeholder/substitute images.
- Step01 implication: keep foundation-only scope, but all future UI steps must enforce direct iOS asset usage by default.
