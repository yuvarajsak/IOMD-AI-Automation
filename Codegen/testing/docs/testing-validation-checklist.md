# Testing Validation Checklist

## Universal Checks

- [ ] iOS source behavior reviewed for the screen.
- [ ] Development step `step.md` reviewed.
- [ ] Development snapshots reviewed when present.
- [ ] Page objects contain all selectors.
- [ ] Test classes contain no inline app selectors.
- [ ] No `Thread.sleep()` or fixed wait.
- [ ] Test data is deterministic.
- [ ] App state is reset before each test.
- [ ] Test can run independently.
- [ ] Failure screenshot is captured.
- [ ] Commands and results are logged in the step file.

## Android UI Automator Checks

- [ ] `UiDevice` setup is centralized.
- [ ] App launch uses package manager intent or instrumentation target context.
- [ ] Runtime permission dialogs are handled through system helpers.
- [ ] Cross-app and system UI are handled through UI Automator helpers.
- [ ] Resource IDs are primary selectors.
- [ ] Text, content-description, and class selectors are fallback only.

## iOS XCUITest Checks

- [ ] `XCUIApplication` launch arguments include UI test mode.
- [ ] SpringBoard interactions are isolated in helpers.
- [ ] Accessibility identifiers are primary selectors.
- [ ] Screenshots are attached to failed tests.
- [ ] Permission and notification state is reset between runs.

## Snapshot Checks

- [ ] Android runtime screenshot captured for every mapped snapshot.
- [ ] Pixel or perceptual comparison completed.
- [ ] Deltas documented with fix plan.
- [ ] Snapshot gate is not marked passed without evidence.
