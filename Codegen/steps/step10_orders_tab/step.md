# Step 10: Orders Tab

## Scope
- Replace the Android `Orders` placeholder tab with a real orders experience.
- Match the iOS Orders dashboard pattern: header actions, time filters, empty state, and purchase rows.
- Reuse Android email detail and extend attachment viewing so order details flow closer to iOS.

## References
- iOS source of truth:
  - `iOS/IOMDAutofill/Modules/NovaDashboard/DashboardOrdersController.swift`
  - `iOS/IOMDAutofill/Modules/NovaDashboard/DashboardOrderController+Tableview.swift`
  - `iOS/IOMDAutofill/Modules/HomeDashboard/NewMessageTableViewCell.xib`
- iOS assets reused on Android:
  - `iOS/IOMDAutofill/Assets.xcassets/NovaDashboard/empty_orders.imageset`
  - `iOS/IOMDAutofill/Assets.xcassets/email_attachment.imageset`
- Android implementation:
  - `Android/app/src/main/java/com/iomd/android/i2iautofill/ui/OrdersFragment.kt`
  - `Android/app/src/main/java/com/iomd/android/i2iautofill/ui/OrderEmailAdapter.kt`
  - `Android/app/src/main/java/com/iomd/android/i2iautofill/ui/AttachmentViewerFragment.kt`

## Implementation Notes
- Drive the Orders tab from order-classified entries already stored in `Emails` and `EmailDetails`.
- Support the iOS-style filter set: `All`, `Last 30 days`, `Last 3 months`.
- Route order row taps into the existing email detail screen.
- Route image attachments into an in-app full-screen viewer for closer parity with iOS.

## Verification
- `./gradlew :app:compileQaDebugKotlin`
- `./gradlew :app:installQaDebug`
- Verify emulator states:
  - empty Orders tab matches the provided iOS empty-state snapshot
  - populated Orders tab shows purchase rows with logo, snippet, time, attachment marker
  - tapping an order opens detail
  - tapping an image attachment opens the full-screen viewer

## Learnings
- Android already stores enough email metadata for Orders parity, so the main work is new Room queries plus snapshot-specific presentation.
- The existing email detail screen was close enough to reuse, but image attachments needed an in-app viewer to match the iOS flow.
