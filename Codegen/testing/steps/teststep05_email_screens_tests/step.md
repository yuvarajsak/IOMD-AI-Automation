# TestStep05_EmailScreensTests

## Development Source Mapping

- Development step: `Codegen/steps/step06_email_screens/step.md`
- Snapshot folder: `Codegen/steps/step06_email_screens/snapshots`

## Objective

Generate automation for inbox, business emails, long-detail email rendering, copy, share, and WebView/native bridge states.

## Required Page Objects

- `InboxPage.kt`
- `EmailListPage.kt`
- `EmailDetailPage.kt`

## Test Scope

- inbox list render
- business email list render
- email detail content load
- long email scroll
- JS bridge interaction if welcome-email style detail is reused
- custom action buttons back, share, copy
- empty and error states when applicable

## Core Test Cases

- `testInboxListLoads()`
- `testBusinessEmailOpens()`
- `testEmailDetailLongScroll()`
- `testEmailCopyAction()`
- `testEmailShareAction()`
- `testEmailBackAction()`

## Findings and Learnings

- Append email-screen test learnings here.
