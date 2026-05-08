# Testing Automation Track

## Purpose

This folder mirrors the existing `Codegen/steps` development track, but for test automation.

The goal is to generate and maintain screen-by-screen automation while preserving iOS-to-Android parity:

- iOS test source: XCUITest, Swift
- Android test target: UI Automator, Kotlin
- Primary implementation target: Android automation under `app/src/androidTest`
- Source of truth: iOS app behavior, iOS test behavior when available, iOS screenshots, and existing `Codegen/steps/*/snapshots`

## Execution Order

1. `testing/steps/teststep01_test_base/step.md`
2. `testing/steps/teststep02_splash_onboarding_tests/step.md`
3. `testing/steps/teststep03_tabs_home_tests/step.md`
4. `testing/steps/teststep04_assistant_tab_tests/step.md`
5. `testing/steps/teststep05_email_screens_tests/step.md`
6. `testing/steps/teststep06_forward_reply_tests/step.md`
7. `testing/steps/teststep07_settings_import_tests/step.md`
8. `testing/steps/teststep08_offers_tests/step.md`
9. `testing/steps/teststep09_orders_tests/step.md`
10. `testing/steps/teststep10_import_passwords_tests/step.md`
11. `testing/steps/teststep11_search_tests/step.md`
12. `testing/steps/teststep12_backup_restore_tests/step.md`

## Standard Rule

Every testing step must include:

- screen scope
- iOS behavior/source mapping
- Android page object requirements
- test cases
- setup and cleanup requirements
- selectors and fallback selectors
- screenshots/evidence requirements
- validation commands
- known flakiness risks

## Automation Principles

- Keep tests screen-by-screen and page-object driven.
- Do not put selectors directly in test classes.
- Use accessibility IDs on iOS and resource IDs on Android as primary locators.
- Use UI Automator for Android system and cross-app surfaces.
- No `Thread.sleep()`.
- Every test must reset or isolate state.
- When snapshots exist, capture Android runtime screenshots and compare against the matching development step snapshots.
