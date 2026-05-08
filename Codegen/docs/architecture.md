# Architecture Overview

## Source of Truth
- `iOS/` is the parity source of truth.
- `Android/` is regeneratable implementation.

## Build/Runtime Baseline
- Android package: `com.iomd.android.i2iautofill`
- Flavors: `dev`, `qa`, `prod`
- Validation default: `qaDebug`

## Data/Platform Baseline
- Firebase + Remote Config baseline in Step02.
- API header parity with iOS networking behavior.
- Room persistence where iOS uses Core Data for equivalent scope.
- For inbox/mail flows, Room should follow iOS Core Data separation:
  - lightweight email/business metadata in primary tables
  - heavy email payload/body in separate storage
  - full-text-search index for searchable email content
  - sync/audit logging for fetch diagnostics

## UI Parity Baseline
- UI implemented from iOS code/assets first.
- Snapshot comparison is final parity gate.
- Image/Icon requirements must use exact iOS assets (no random/placeholder substitutes).

## Home/Data Query Baseline
- iOS Home behavior is email-first and local-query driven.
- Android parity direction is:
  - fetch inbox emails
  - persist them into Room
  - drive `Messages`, `Businesses`, and detail pages from Room-backed queries
- Default `Node` business seeding is part of onboarding-to-home parity and should remain compatible with the persisted inbox model.
