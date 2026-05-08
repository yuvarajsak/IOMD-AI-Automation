# TestStep03_TabsHomeTests

## Development Source Mapping

- Development step: `Codegen/steps/step04_tabs_and_home_page/step.md`
- Snapshot folder: `Codegen/steps/step04_tabs_and_home_page/snapshots`

## Objective

Generate automation for tabs, home dashboard, business list, filter sheet, tutorial cards, copy states, business detail, and welcome-email detail entry.

## Required Page Objects

- `HomePage.kt`
- `BottomTabsPage.kt`
- `BusinessDetailPage.kt`
- `EmailDetailPage.kt`
- `FilterSheetPage.kt`

## Test Scope

- tab switching for Home, Orders, Top 5 Offers, Assistant
- home header variants
- carousel swipe states
- segment switching Businesses and Messages
- filter sheet open and selection
- copy token bubble or toast states
- business detail open and close
- welcome-email detail open and back navigation
- bottom bar hidden on detail screens
- snapshot-mapped states `01` through `14`

## Core Test Cases

- `testHomeLoadsAfterOnboarding()`
- `testBottomTabsNavigation()`
- `testCarouselCanSwipe()`
- `testFilterSheetOpens()`
- `testBusinessDetailOpens()`
- `testEmailDetailOpensFromBusiness()`
- `testCopyTokenFeedbackAppears()`
- `testBottomBarHiddenOnDetail()`

## Special Validation

- verify Room-backed welcome email state is rendered
- verify remote-config tutorial content presence
- capture screenshot evidence for all mapped home states

## Findings and Learnings

- Append home and tabs test learnings here.
