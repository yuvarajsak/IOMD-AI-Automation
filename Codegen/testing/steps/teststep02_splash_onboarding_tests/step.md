# TestStep02_SplashOnboardingTests

## Development Source Mapping

- Development step: `Codegen/steps/step03_splash_onboarding/step.md`
- Snapshot folder: `Codegen/steps/step03_splash_onboarding/snapshots`

## Objective

Generate automation for splash, onboarding, create-token, loading, and post-create success states.

## Required Page Objects

- `SplashPage.kt`
- `OnboardingPage.kt`
- `CreateTokenPage.kt`
- `TokenCreatedPage.kt`

## Test Scope

- splash loads first
- onboarding shown when state is incomplete
- returning user bypasses onboarding
- create-token validation states
- create-token success navigation
- backend failure handling
- DataStore onboarding persistence
- snapshot-mapped runtime states `01` through `06`

## Core Test Cases

- `testSplashAppearsFirst()`
- `testOnboardingShownForNewUser()`
- `testOnboardingSkippedForExistingUser()`
- `testCreateTokenValidation()`
- `testCreateTokenSuccess()`
- `testCreateTokenFailure()`
- `testOnboardingPersistenceAfterRelaunch()`

## Special Validation

- verify token suffix parity with iOS
- verify API call preconditions for token creation
- capture screenshots for splash, welcome, create-token, loading, and success states

## Findings and Learnings

- Append onboarding test learnings here.
