# TestStepXX: <Screen / Flow Name>

## Development Source Mapping

- Development step:
- Snapshot folder:
- iOS source files:
- Android implementation files:

## Objective

Generate screen-by-screen automation for this flow with iOS behavior parity and Android UI Automator coverage.

## Test Scope

- Positive flows:
- Negative flows:
- System UI and cross-app flows:
- Persistence and state checks:
- Snapshot states:

## Page Objects

Android page objects:

- `<PageName>Page.kt`

iOS page objects:

- `<PageName>Page.swift`

## Required Selectors

Primary selectors:

- Android resource IDs:
- iOS accessibility IDs:

Fallback selectors:

- Text:
- Content description:
- Class or type:

## Test Cases

- [ ] `test...`

## Setup and Cleanup

- Reset app data:
- Seed data:
- Mock or Remote Config state:
- Permission state:
- Notification state:

## Validation Commands

```sh
./gradlew help
./gradlew :app:assembleQaDebug :app:assembleQaDebugAndroidTest
./gradlew :app:connectedQaDebugAndroidTest
```

## Evidence

- Runtime screenshots:
- Test report:
- Logs:

## Known Flakiness Risks

- Risk:
- Mitigation:

## Findings and Learnings

- Append new findings here.
