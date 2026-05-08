# Testing Architecture

## Source of Truth

Testing follows the same parity model as development:

- iOS app behavior is the source of truth.
- Existing development snapshots are the visual-state reference.
- Android UI Automator tests must verify Android behaves like the iOS flow.

## Generated Test Layout

Recommended Android output:

```text
Android/app/src/androidTest/java/com/iomd/android/i2iautofill/uitests
  /tests
  /pageobjects
  /helpers
  /fixtures
  /extensions
```

Recommended iOS output:

```text
iOS/IOMDAutofillUITests
  /Tests
  /PageObjects
  /Helpers
  /Fixtures
  /Extensions
```

## Screen-by-Screen Model

Each testing step maps to one or more development steps:

- Test Step 02 -> Development Step 03
- Test Step 03 -> Development Step 04
- Test Step 04 -> Development Step 05
- Test Step 05 -> Development Step 06
- Test Step 06 -> Development Step 07
- Test Step 07 -> Development Step 08
- Test Step 08 -> Development Step 09
- Test Step 09 -> Development Step 10
- Test Step 10 -> Development Step 11
- Test Step 11 -> Development Step 12
- Test Step 12 -> Development Step 13

## Page Object Rule

Tests call page methods only:

- Good: `homePage.openFilterSheet()`
- Good: `permissionHelper.allowNotifications()`
- Bad: `device.findObject(By.res(...)).click()` inside a test

Selectors live in page objects or system helpers.

## Validation Rule

Each testing step must report:

- generated or updated test files
- selectors added
- test data added
- commands run
- pass or fail result
- screenshot evidence paths when UI is in scope
- flakiness risks and mitigations

## Android Test Commands

Default commands:

```sh
./gradlew help
./gradlew :app:assembleQaDebug :app:assembleQaDebugAndroidTest
./gradlew :app:connectedQaDebugAndroidTest
```

Use a narrower command when validating one screen:

```sh
./gradlew :app:connectedQaDebugAndroidTest -Pandroid.testInstrumentationRunnerArguments.class=<test-class>
```

## iOS Test Commands

Default commands:

```sh
xcodebuild test \
  -workspace iOS/IOMDAutofill.xcworkspace \
  -scheme IOMDAutofillUITests \
  -destination 'platform=iOS Simulator,name=iPhone 15'
```

## Snapshot Evidence

When a development step has snapshots:

1. Drive Android to the equivalent runtime screen.
2. Capture a screenshot.
3. Compare against `Codegen/steps/<step>/snapshots`.
4. Record match percentage and blockers in the testing step.
