# TestStep01_TestBase: Test Framework Baseline

## Development Source Mapping

- Supports development Steps 01 and 02
- Android output target: `Android/app/src/androidTest/java/com/iomd/android/i2iautofill/uitests`

## Objective

Create the reusable automation foundation before screen-specific tests are generated.

## Required Output

- Android `BasePage.kt`
- Android `WaitHelpers.kt`
- Android `SystemUiHelpers.kt`
- Android `ScreenshotHelper.kt`
- Android `TestData.kt`
- Android smoke launch test
- iOS `BasePage.swift`
- iOS `WaitHelpers.swift`
- iOS `SystemUIHelper.swift`
- iOS screenshot-on-failure support

## Test Scope

- app launch
- app relaunch
- clean app state
- permission reset strategy
- screenshot capture
- common waits
- base selectors and page objects

## Validation Commands

```sh
./gradlew help
./gradlew :app:assembleQaDebug :app:assembleQaDebugAndroidTest
./gradlew :app:connectedQaDebugAndroidTest -Pandroid.testInstrumentationRunnerArguments.class=<smoke-test>
```

## Findings and Learnings

- Append reusable framework learnings here.
