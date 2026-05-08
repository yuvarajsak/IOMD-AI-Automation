# Android Recovery Learnings (2026-03-06)

## Module: `network/ApiClient.kt`
- `/users` request parity with iOS is:
  - `POST {baseUrl}/users`
  - body: `{"email":"<tokenizedEmail>","password":"<generatedPassword>"}`
  - headers always: `Accept: application/json`, `Content-Type: application/json`, `x-node-token`
- Emulator/simulator parity:
  - send only `x-node-token`
  - do not send `x-firebase-appcheck`
- Real-device parity:
  - require App Check token and send `x-firebase-appcheck`
  - if token is missing, fail request path before marking onboarding success
- Success gate: treat only `HTTP 200` as success.
- Failure diagnostics:
  - collect request summary + response summary for UI alerting when status is non-200 or transport fails.

## Module: `onboarding/OnboardingViewModel.kt`
- On success:
  - persist onboarding completion
  - persist `tokenizedEmail` into DataStore for downstream screens
  - persist welcome-email payload through Room path
  - navigate to Home celebration state
- Tokenized email generation rule:
  - if input is empty during programmatic flow, create prefix `test_<3 or 4 random chars>`
- Password generation parity (iOS logic):
  - `<emailPrefix>_<12 random alphanumeric mixed-case chars>`
- Base URL mapping parity:
  - `qa -> https://api.qa.nodemy.info/api/v1`
  - `dev -> https://api.dev.nodemy.info/api/v1`
  - `prod -> https://prod.api.nodemy.info/api/v1`

## Module: `ui/AppRoot.kt` (Onboarding + Home Overlay)
- Failure alert behavior:
  - show alert only when API fails (`!= 200` or no HTTP response)
  - include request headers/body summary and response headers/body summary
  - do not show alert when API succeeds (`200`)
- Snapshot parity adjustments:
  - celebration CTA text: `You are all set! 🎉`
  - dim overlay tuned lighter
  - top token card area uses opaque surface to hide underlying swipe-card region
- Existing state check:
  - Android-only `Generate random test token` CTA is removed in this snapshot.

## Validation Commands
- Build validation rerun after recovery edits:
  - `./gradlew :app:assembleQaDebug` -> PASS

## Module: `persistence/CoreDataParityEntities.kt` + `persistence/InboxPersistenceDao.kt`
- Inbox fetch persistence must mirror the iOS split between lightweight email metadata and heavier content storage.
- Android Room parity structure now includes:
  - `Emails` for subject/from/to/timestamps and business linkage
  - `EmailDetails` for body/html/raw payload storage
  - `EmailDetailsFts` for full-text search indexing
  - `InboxSyncLog` for request/response audit history
- `EmailDetails.rawPayload` must be kept because iOS stores the full server email object and Android needs the same debugging/replay surface.
- Business/email detail screens should query Room-backed email data, not reconstruct content from hardcoded welcome placeholders.

## Module: `home/HomeInboxViewModel.kt`
- Inbox sync should be email-first, matching iOS fetch semantics:
  - call `/email/inbox`
  - persist the raw email response into Room
  - derive business list state from persisted/local state
- Current Android parity improvement:
  - successful inbox fetch writes `Emails`, `EmailDetails`, `EmailDetailsFts`, and `InboxSyncLog`
  - default-added businesses are merged so `Node` appears in both `Messages` and `Businesses` immediately after onboarding
- Remaining parity gap vs iOS:
  - top-level Home tabs are still partially driven by grouped in-memory fetch results
  - final parity requires both tabs to be query-driven from Room predicates, the same way iOS uses Core Data predicates

## Module: `ui/DetailScreens.kt` + `ui/AppRoot.kt`
- Business and email detail routes must carry real identifiers:
  - business route uses `businessId`
  - email route uses `businessId + emailId`
- Do not bind all business taps to the Node welcome flow.
- Detail rendering parity rule:
  - if persisted inbox emails exist for the tapped business, show those
  - only use the Node welcome-email fallback when the selected business is `node` and no persisted Node email exists

## Runtime Learnings (2026-03-06)
- Verified inbox persistence from live QA data:
  - inbox fetch returned `HTTP 200`
  - Android logs showed `INBOX HTTP 200 emails=1 businesses=1`
  - Room verification confirmed persisted rows in `Emails`, `EmailDetails`, `EmailDetailsFts`, and `InboxSyncLog`
- Verified business-specific detail routing:
  - tapping `ideas2it` in `Messages` opens `ideas2it` detail, not Node welcome content
  - tapping the persisted `ideas2it` email opens the stored email body from Room
  - tapping `Node` in `Businesses` shows welcome fallback when no persisted Node inbox email exists

## Query Parity Learning (iOS vs Android)
- iOS Home behavior is local-query driven after inbox sync:
  - fetch raw emails
  - save/update merchants and emails in Core Data
  - query merchants locally for both `Businesses` and `Messages`
- Android now matches the persistence half of that design.
- Android is not yet fully equivalent at the top-level tab query layer, so future codegen work must avoid reintroducing transient network-only grouping as the long-term source of truth.
