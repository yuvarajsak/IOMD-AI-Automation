## Canonical Snapshot Paths (Nearby)
- `Codegen/steps/step04_tabs_and_home_page/snapshots/01-home-base-profile.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/02-home-carousel-variant.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/03-home-compact-messages.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/04-home-messages-list.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/05-home-filter-sheet.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/06-home-business-detail.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/07-home-email-detail-long.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/08-home-copy-bubble.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/09-home-rc-profile-card.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/10-home-compact-tutorial-list.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/11-home-dont-use-gmail-dialog.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/12-home-how-to-use-node-list.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/13-home-how-to-use-node-list-scrolled.png`
- `Codegen/steps/step04_tabs_and_home_page/snapshots/14-home-how-to-use-node-player.png`

# Step04_TabsAndHomePage: Tabs and Home Dashboard Implementation

## Objective
Implement the main dashboard entry experience after onboarding:
- Bottom tab navigation (`Home`, `Orders`, `Top 5 Offers`, `Assistant`)
- Home screen header, card carousel, segment chips, business row, guidance cards
- Snapshot-matched UI states for filter sheet, copy toast, and business detail view

`Codegen/docs/validation/checklist.md` must be respected throughout code generation.
Implementation order rule: generate UI from iOS code/assets first; use snapshots only at the end as reference for parity verification and tuning.

## Mandatory Rule For This Step
- During code generation for Step04 and all future steps, `Codegen/docs/validation/checklist.md` is a strict requirement.
- If snapshots exist, pixel-by-pixel comparison is mandatory before Step04 can be marked complete.

## Task Details
1. **Tabs Scaffold**:
   - Implement a bottom navigation bar with four tabs:
     - Home
     - Orders
     - Top 5 Offers
     - Assistant
   - Match selected and unselected visual states from snapshots, including selected tab pill/shape behavior.

2. **Home Dashboard Layout**:
   - Implement top branding/profile header variants seen in snapshots.
   - Implement carousel cards and paging indicators.
   - The top "Watch how to use Node" and adjacent top-profile cards must be horizontally swipeable cards (not static toggles only).
   - Implement segment controls (`Businesses`, message tab) and filter affordance.
   - Implement business list row and guidance card stack with paired CTA buttons.

3. **Home Interaction States**:
   - Filter icon opens a bottom-sheet style options panel.
   - Copy-token action shows dismissible bottom toast.
   - Tapping business row opens the business detail view state shown in snapshots.

4. **Parity Requirements**:
   - Respect exact control geometry styles per snapshot (pill, rounded rectangle, button corner shape).
   - Keep iOS source as primary while implementing; use snapshots as final-reference parity check.
   - Remote Config text parity is mandatory: any Step04 text sourced from iOS Firebase Remote Config must be sourced from Android Firebase Remote Config using matching key strategy.
   - For welcome-email/business-detail content where iOS stores Remote Config payload (`thankyou_email.mail`) in Core Data, Android must store equivalent fields in Room and render the Step04 UI from Room-backed values.

## Verification Requirements
- Run sync-equivalent before build:
  - `./gradlew help`
- Run step build verification:
  - `./gradlew :app:assembleQaDebug`
- Verify app launch/readiness for Step04 flow.
- Confirm iOS folder remains unchanged.
- **MANDATORY**: Execute all applicable checks in `Codegen/docs/validation/checklist.md`.
- **MANDATORY**: Verify Step04 Remote Config text parity where iOS dashboard flow reads remote-config-backed text.

## Completion
After all applicable checklist items pass (including snapshot pixel check gate), summarize Step04 progress and wait for user confirmation before the next step.

## Implementation Findings (2026-03-04)
- Replaced `HomePlaceholderScreen` usage with `HomeTabsScreen` in navigation.
- Implemented Compose tabs scaffold and Home dashboard states corresponding to provided Step04 snapshots:
  - base home state
  - alternate carousel card state
  - compact-header home list state
  - filter options sheet
  - copy confirmation toast
  - business detail page state
- Added Orders/Top 5 Offers/Assistant tab placeholders to complete tab routing shape and selected-state behavior.
- Build verification completed:
  - `./gradlew help` -> PASS
  - `./gradlew :app:assembleQaDebug` -> PASS

## Learnings (2026-03-04)
- Home dashboard snapshots include multiple UI states that should be represented in Step04 implementation, not only a single static screen.
- Button geometry parity matters as much as text/content parity in this step (for example CTA pill shapes and selected-tab capsule shape).

## Cross-Step Runtime Learning (2026-03-04)
- During QA validation, onboarding create-token can be temporarily bypassed to unblock navigation into Step04 Home/Tabs screens when backend/App Check is unavailable.
- This bypass is only for temporary progression and must be removed before final API parity signoff.

## UX Re-Verification (2026-03-04)
- Re-captured and compared Step04 states against provided snapshots:
  - base home list
  - filter bottom sheet
  - compact/messages variant
  - business detail page
  - copy-toast state
- Verified matches:
  - structural layout flow (header -> carousel/card -> segment controls -> list -> bottom tabs)
  - major CTA geometry style (pill buttons and bordered secondary buttons)
  - filter and toast interaction presence
- Remaining parity gaps (strict pixel-by-pixel fail):
  - before asset-pass, placeholder glyph/emoji-based icons existed in multiple places.
  - typography weight/size spacing still differs in header and card blocks.
  - before asset-pass, some top-bar and tab icons were symbolic placeholders.
  - carousel/snapshot state switching does not fully mirror expected screen-to-screen transitions.
- Gate status:
  - **Step04 cannot be marked complete yet** under strict pixel-by-pixel rule until the above mismatches are resolved.

## Parity Update (2026-03-04 - Asset-Based Pass)
- Replaced placeholder glyph/emoji-based Step04 UI with iOS asset-backed implementation in Android Compose.
- Imported and wired iOS dashboard assets for:
  - bottom tab icons (selected/unselected states),
  - message/search/profile/filter/copy icons,
  - card leading icons (token use, replace email, signup, Apple Pay, import actions),
  - node business badge, carousel tutorial thumbnail/play icon,
  - detail header controls (back/share/open-site icon style),
  - filter sheet and toast visual states.
- Re-verified build and runtime capture after asset pass:
  - `./gradlew :app:assembleQaDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS
  - Clean-run screenshots captured for Step04 state set (home/filter/compact/detail/toast).

## Current Step04 Status
- Visual parity is significantly closer to snapshots after the asset-based pass.
- Final strict pixel-by-pixel signoff still requires final manual approval against every provided snapshot state.

## Continuation Verification Update (2026-03-04)
- Step04 tabs/home implementation was restored and reconnected after Step03-only regeneration:
  - `HomeTabsScreen` wired back as post-onboarding Home destination.
  - Step04 drawable asset set re-added for tab/header/card/filter/detail/toast states.
- Verification rerun results:
  - `./gradlew help` -> PASS
  - `./gradlew :app:assembleQaDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS
  - app launch check via adb start -> PASS
- Scope note:
  - QA-only debug pinning remains active from previous setup, so Step04 verification is currently executed on `qaDebug`.

## UI Check Update (2026-03-04)
- Performed fresh emulator captures and compared against Step04 snapshot set (`01`..`09` homepage PNGs).
- Current parity result: **FAIL (pixel-by-pixel gate not satisfied yet)**.
- State mapping used:
  - `01` base home -> captured and close structurally.
  - `02` carousel card variant -> captured and close structurally.
  - `03` compact-header businesses variant -> no reliable matching capture from current runtime flow.
  - `04` messages-segment compact list -> captured and close structurally.
  - `05` filter bottom sheet -> captured.
  - `06` business detail list view -> captured.
  - `07` long detail article view -> no reliable matching capture from current runtime flow.
  - `08` top copy bubble state -> no reliable matching capture from current runtime flow.
  - `09` bottom copy toast -> captured.
- Observed mismatches blocking strict signoff:
  - Header/icon sizing and spacing differs from snapshots in multiple states.
  - Business badge/icon treatment differs (row/avatar visual style drift).
  - Detail state still shows bottom-tab bar while snapshot detail states are full-page style.
  - Copy-toast geometry/placement differs from snapshot toast state.
  - Some interaction-state transitions (compact/businesses, long detail, copy bubble) are not consistently reproducible to match provided snapshot states.

## Welcome Email Persistence Learning (2026-03-04)
- Step04 business-detail welcome content must be sourced from Room-backed data persisted from Remote Config `thankyou_email.mail` (iOS Core Data parity), not hardcoded text.
- Persistence trigger should align with onboarding completion flow (`welcomeEmailLoaded`) rather than unconditional startup re-sync.

## UI Parity Refinement Learnings (2026-03-04)
- **Detail View Scaffold**: To match iOS navigation where the bottom bar is hidden on detail screens, lift the `showDetail` state to the root `Scaffold` level on Android and conditionally hide the `bottomBar`.
- **Dynamic Header States**: Use `LazyListState.firstVisibleItemScrollOffset` with `derivedStateOf` to toggle the "compact" header mode during scrolling. This ensures the header transitions match the "Businesses" vs "Messages" tab-switching behavior seen in snapshots.
- **Compose-based Rainbow Borders**: For "Node Connected" business logos, a `Brush.linearGradient` border in Compose is superior to static image assets for achieving the exact Nova rainbow glow effect across different screen densities.
- **Filter Sheet Aesthetics**: Filter sheet titles (e.g., "FILTER OPTIONS") should use uppercase, extra-bold typography with specific grey-scale coloring (`#7A7D8C`) and custom-drawn radio buttons to meet the "Pixel-by-Pixel" gate.

## Icon Parity Learnings (2026-03-04)
- Snapshot parity required replacing two symbolic Android icons with iOS-equivalent semantics:
  - header leading action icon should be **chat bubble** (not envelope),
  - `Businesses` chip should include **shield/check** icon.
- Where Android drawable parity assets are unavailable, Compose Material Icons (`ChatBubbleOutline`, `VerifiedUser`) provide a stable fallback that preserves iOS intent and snapshot-level recognizability.
- Remote Config text parity and icon parity must be validated together; empty RC CTA labels can make icon-only buttons appear visually incorrect even when icon assets are correct.
- For tutorial rows sourced from `tutorial_preferences.tutorial_list`, Android must include all referenced image assets (not only top rows). Added missing iOS-parity assets for `enablepassword` and `importgmail` to fix last-row icon drift.

## Final Parity Verification Update (2026-03-04)
- Revalidated iOS-vs-Android Home snapshot parity after latest icon pass.
- Added/verified Android Home icon parity updates:
  - header first action icon -> chat bubble style,
  - Businesses chip -> shield/check style,
  - tutorial rows for `pv_enablepasswords_home` and `pv_importgmail` -> correct iOS-equivalent row icons.
- Verification commands rerun:
  - `./gradlew :app:assembleDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS
- Runtime evidence:
  - base comparison capture: `/tmp/android_home_icons_fixed.png`
  - lower-list verification (last two rows): `/tmp/android_home_last_two_rows.png`

## iOS Behavior Replication Update (2026-03-05)
- Cross-verified iOS tutorial parsing path and kept Android parity on `app_preferences.tutorial_preferences.tutorial_in_home` (with `tutorial_list` lookup by `menus` keys).
- Confirmed Android Home tutorial cards now resolve from remote config payload and icon mapping for `pv_applePay_home`, `pv_enablepasswords_home`, `pv_importgmail` remains aligned with iOS-driven tutorial keys.
- Updated Android Step04 behavior to mirror iOS detail flows:
  - tap Node business row -> open Business Detail view,
  - tap welcome email row -> open Email Detail view (iOS-style long content fallback when HTML payload unavailable),
  - detail pages hide the home bottom tab bar.
- Added null-safe welcome-email rendering (guards for `null`/blank title, subtitle, createdDate) so Room-backed content does not show `"null"` in UI.
- Added explicit fallback text for RC-empty states that iOS still presents in UI:
  - carousel tutorial title/subtitle (`Watch how to use Node`, `Short videos`),
  - filter labels/count lines (`All Businesses`, `Businesses Not Added`, `Blocked Businesses`),
  - copy toast text (`Copied to your clipboard`).
- Verification rerun after updates:
  - `./gradlew :app:assembleDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS

## Welcome Email WebView Communication Learning (2026-03-05)
- iOS `EmailVC` handles welcome-email interactivity using WebView JS-native bridge; the page is expected to call native and receive dynamic values.
- iOS bridge contract observed:
  - `WKScriptMessageHandler` name: `getFromNodeApp`
  - request `tokenizedEmail` -> native sends `window.receiveEmail(tokenizedEmail)`
  - request `profilePicture` -> native sends `window.receiveProfilePicture(base64Image)`
- iOS also handles `iomd-app://` links inside email HTML via `decidePolicyFor navigationAction`:
  - `.../back-btn` -> close email view
  - `.../share-btn` -> share flow
  - `.../copy-my-token` -> copy token + toast/haptic
- Step04 parity implication for Android:
  - Welcome email detail must support JS bridge + custom-scheme actions when rendering RC/DB HTML,
  - fallback static rendering is acceptable only when HTML/JS payload is unavailable.

## Welcome Email Token Source Learning (2026-03-05)
- iOS `EmailVC` uses profile-backed tokenized email (`ProfileViewModel().getCurrentTokenizedEmail()`) for welcome-email page actions; it does not keep a visible `"Loading email"` placeholder.
- Android Step04 parity rule:
  - resolve welcome-email token text from persisted user token source first (DataStore/profile-equivalent),
  - if unavailable, fall back to resolved home token name+domain values (RC/default-derived),
  - do not render `"Loading email"` in the user-facing welcome-email token card.

## Regeneration Verification Update (2026-03-05)
- Recreated Step04 scaffold in fresh Android codebase:
  - Bottom tabs: Home / Orders / Top 5 Offers / Assistant
  - Home interactions: filter sheet, copy toast, business row -> email detail route
  - Room-backed welcome-email persistence path remains wired from onboarding create flow
- Verification commands:
  - `./gradlew help` -> PASS
  - `./gradlew :app:assembleQaDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS

## Regeneration Gate Status (2026-03-05)
- Step04 strict snapshot pixel-parity gate remains OPEN for full state-by-state screenshot comparison vs `Codegen/steps/step04_tabs_and_home_page/snapshots/01..09`.
- API-dependent progression to post-onboarding Home states requires successful create-token backend path in current environment before final parity signoff.

## Snapshot Validation Pass (2026-03-05 - Post-Regeneration)
- Captured runtime Step04 states on QA emulator:
  - Home: `/tmp/iomd_step04_01_home.png`
  - Filter sheet: `/tmp/iomd_step04_02_filter.png`
  - Copy toast: `/tmp/iomd_step04_03_toast.png`
  - Detail page: `/tmp/iomd_step04_04_email_detail.png`
- Pixel parity verdict vs Step04 snapshots (`01..09`) -> **FAIL**.
- High-impact mismatches observed:
  - Header layout, profile/action icons, and carousel composition do not match snapshot states.
  - Business row avatar/badge styling and list-card structures differ from iOS/snapshot design.
  - Filter sheet geometry/typography/radio controls differ from snapshot treatment.
  - Copy toast style/positioning differs (snapshot purple bar vs current dark toast chip).
  - Detail page structure differs (snapshot dark header + list/search scaffold vs simplified static detail page).
  - Missing several snapshot-mapped intermediate states (`02`, `03`, `04`, `07`, `08`) in current implementation.

## Revisit Update (2026-03-05)

## Inbox Persistence And Query Parity Update (2026-03-06)
- Android Step04 Home flow now persists inbox fetch results into Room, aligning more closely with the iOS Core Data model.
- Room entities used for Step04 inbox-backed UI:
  - `Emails`
  - `EmailDetails`
  - `EmailDetailsFts`
  - `InboxSyncLog`
- Verified QA runtime behavior:
  - inbox fetch returns and stores live emails sent to the tokenized address
  - stored email content can be opened from Home detail routes
- Step04 routing parity rule:
  - tapping a business row must open that business's own detail route
  - tapping an email row must open that email's own persisted detail content
  - Node welcome content is fallback-only, not a global substitute for all businesses

## Default Node Business Learning (2026-03-06)
- After onboarding succeeds and Home loads, `Node` must be seeded as an added/default business.
- Step04 implication:
  - `Node` appears in both `Businesses` and `Messages` even before inbox sync returns Node-specific mail
  - tutorial cards still remain visible; default business seeding does not replace the tutorial stack

## Pull-To-Refresh And Header Behavior Learning (2026-03-06)
- Businesses/Messages segmented control must remain visually pinned during pull-down.
- Refresh behavior should happen under the segmented control, not drag the chip row away.
- Avoid stacked/double pull indicators; Compose refresh container placement matters for parity.

## Step04 Remaining Data-Parity Gap (2026-03-06)
- Android now stores inbox emails similarly to iOS, but top-level Step04 lists are not yet fully Room-query driven.
- Final iOS parity target for Step04 remains:
  - inbox sync persists raw emails
  - merchants/emails are updated locally
  - both `Messages` and `Businesses` tabs query Room with iOS-equivalent predicates
- Future Step04 codegen changes must preserve the new Room-backed inbox persistence and move list rendering toward local-query parity, not back toward transient grouped network models.
- Step04 implementation remains pending final parity closure.
- New enforced dependency from current cycle: any Step04 image/icon requirement must use exact iOS asset mapping (no random/substitute assets) as per workspace global rule in `Codegen/AGENTS.md`.

## Implementation Update (2026-03-05 - Rules-First Missing-Parity Pass)
- Applied rules-first update in canonical docs before Android edits:
  - `Codegen/AGENTS.md` and validation checklist now explicitly block Step04 closure unless welcome-email runtime parity is complete (Room-backed content + WebView bridge + `iomd-app://` action handling).
- Android Step04/runtime parity improvements implemented:
  - Welcome-email detail now reads Room-persisted content (`welcome_email`) and renders HTML in Android WebView.
  - Added iOS-equivalent JS bridge shim for `window.webkit.messageHandlers.getFromNodeApp.postMessage(...)` in WebView.
  - Added native callback handling for JS requests:
    - `tokenizedEmail` -> `window.receiveEmail(...)`
    - `profilePicture` -> `window.receiveProfilePicture(...)`
  - Added `iomd-app://` custom action intercepts:
    - `.../back-btn` -> close detail
    - `.../share-btn` -> share intent
    - `.../copy-my-token` -> clipboard copy + toast feedback
  - Persisted tokenized email into DataStore during create-token success and reused it for Home/Email detail parity paths.
  - Replaced celebration overlay emoji icon with iOS asset (`unicorn_icon`) to remove non-iOS placeholder imagery.
- Validation rerun:
  - `./gradlew help` -> PASS
  - `./gradlew :app:assembleQaDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS
- Status:
  - Runtime parity for welcome-email flow improved materially.
  - Full Step04 snapshot pixel-parity gate remains OPEN until all `01..09` states are matched.

## Implementation Update (2026-03-05 - Remaining-Step04 Fix Pass)
- Refactored Step04 Home flow to iOS-asset-backed multi-state UI with explicit snapshot mappings:
  - Home token card (`01`), Watch-card carousel variant (`02`), scrolled tutorial-list variant (`03`),
  - Messages mode (`04`), filter bottom sheet (`05`),
  - Business detail list (`06`) and email detail with gradient header + Room HTML render (`07`),
  - Copy bubble (`08`) and purple copy toast (`09`).
- Added/imported iOS-equivalent assets into Android drawable for tabs/header/chips/tutorial rows/detail controls (no random images).
- Improved interaction parity:
  - Home cards + chips + filter/tap states
  - Business row -> detail route -> email detail route
  - Copy actions trigger top bubble and bottom toast states
- Fixed email detail layout bug where WebView overlaid the custom header (moved WebView into weighted container).
- Verification commands rerun:
  - `./gradlew help` -> PASS
  - `./gradlew :app:assembleQaDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS
- Runtime evidence captures (latest pass):
  - `/tmp/step4_fix_01.png`
  - `/tmp/step4_fix_02.png`
  - `/tmp/step4_fix_03.png`
  - `/tmp/step4_fix_04.png`
  - `/tmp/step4_fix_05.png`
  - `/tmp/step4_fix_06.png`
  - `/tmp/step4_fix_07.png`
  - `/tmp/step4_fix_08.png`
  - `/tmp/step4_fix_09.png`
- Residual note:
  - Strict pixel-perfect parity still has visible deltas in typography spacing and `03/07` composition compared with provided snapshots; gate remains OPEN until final tuning pass.

## Focused Tuning Update (2026-03-05 - Snapshot 03 and 07)
- Applied focused parity tuning for remaining high-delta states:
  - `03-homepage`: stabilized compact-header behavior and fixed card-stack overlap so compact top row + chip row + ApplePay-first tutorial stack render in a snapshot-like composition.
  - `07-homepage`: fixed detail-layout layering and ensured rich long-form welcome-email fallback HTML is rendered with gradient header + token card/copy action behavior.
- Additional UI behavior fixes for this pass:
  - Home compact-mode latch after first list scroll transition for reproducible compact state capture.
  - Home list top padding in compact mode to avoid top-card clipping under fixed business row.
  - Email detail fallback switched to rich HTML when persisted payload is too short (keeps bridge/copy behavior active).
- Validation rerun:
  - `./gradlew help` -> PASS
  - `./gradlew :app:assembleQaDebug` -> PASS
  - `./gradlew :app:installQaDebug` -> PASS
- Updated runtime evidence:
  - `/tmp/step4_fix_03.png`
  - `/tmp/step4_fix_07.png`

## Reverification Learning Update (2026-03-05 - Home UI + Cross-Platform Run)
- Android Home filter issue root cause was immediate scrim-dismiss race on the same tap used to open filter; fix requires a short dismiss gate after open (implemented with `filterCanDismiss` guard + ~220ms delay).
- Emulator automation learning: fixed tap coordinates are not stable across UI states; use `adb shell uiautomator dump` bounds to target current filter icon hitbox before capture.
- Verified Android runtime states after fix:
  - home: `/tmp/step4_final_home.png`
  - filter open: `/tmp/step4_final_filter3.png`
- iOS verification learning:
  - Building `iOS/IOMDAutofill.xcodeproj` can fail with missing Firebase headers even after pods are present.
  - Step04 iOS runtime verification must use CocoaPods workspace build:
    - `xcodebuild -workspace iOS/IOMDAutofill.xcworkspace -scheme IOMDAutofill-QA ...`
  - `pod install` was required in this environment before successful workspace build and simulator run.
  - iOS runtime evidence: `/tmp/ios_home_after_workspace_fix.png`.

## iOS-First Tutorial Flow Update (2026-03-05)
- Implemented Home tutorial expansion flow by following iOS sources first:
  - `iOS/IOMDAutofill/Modules/Settings/View/NewTutorialsViewController.swift`
  - `iOS/IOMDAutofill/Modules/Settings/View/NewTutorialsTableViewCell.swift`
  - `iOS/IOMDAutofill/Modules/Settings/View/NewTutorialPlayerViewController.swift`
  - `iOS/IOMDAutofill/Helper/Network/RemoteConfigHelper+Tutorials.swift`
- Android implementation updates:
  - Added `How to use node` list screen and tutorial player screen in Home flow.
  - Wired Home footer links to iOS-equivalent hide dialogs:
    - `Don’t use Gmail?`
    - `Don't Use Apple Pay?`
  - Added hide-state filtering for tutorial cards in current runtime session (gmail/apple-pay tutorial rows removed after `Hide`).
- Remote Config parity updates:
  - Extended Android tutorial payload parsing to include iOS fields:
    - `mode`
    - `thumbnail`
    - `canDismiss`
  - Tutorial list/text/video behavior now reads from `app_preferences.tutorial_preferences.tutorial_list` values (`title`, `subtitle`, `link`, `mode`, `thumbnail`) instead of hardcoded video metadata.
- Runtime captures stored with naming convention in Step04 snapshots:
  - `Codegen/steps/step04_tabs_and_home_page/snapshots/09-home-rc-profile-card.png`
  - `Codegen/steps/step04_tabs_and_home_page/snapshots/10-home-compact-tutorial-list.png`
  - `Codegen/steps/step04_tabs_and_home_page/snapshots/11-home-dont-use-gmail-dialog.png`
  - `Codegen/steps/step04_tabs_and_home_page/snapshots/12-home-how-to-use-node-list.png`
  - `Codegen/steps/step04_tabs_and_home_page/snapshots/13-home-how-to-use-node-list-scrolled.png`
  - `Codegen/steps/step04_tabs_and_home_page/snapshots/14-home-how-to-use-node-player.png`

## Final Snapshot Baseline Learning (2026-03-05)
- If the user confirms current captured snapshots are the final baseline, treat that set as canonical for ongoing parity checks even if an older file in a prior sequence was deleted intentionally.
- Keep snapshot names state-descriptive (not generic `homepage`) to reduce ambiguity during re-verification and bug triage.
- For Step04 tutorial-related parity, verification must include both:
  - Home list cards (RC text/icon states), and
  - tutorial expansion flow (`How to use node` list, player entry, and footer hide-dialog actions).

## Logo Parity Learning (2026-03-06)
- Home top-left Node logo mismatch root cause was a reusable composable (`NodeWordmark`) hardcoding width internally (`150.dp`), which overrode caller-specific sizing in Home header states.
- Fix pattern:
  - keep shared branding composables modifier-driven (no internal forced width/height),
  - pass explicit size only at each callsite that needs it (for example Splash/Welcome vs Home).
- Verification evidence:
  - post-fix focused runtime capture: `Android/runtime_step04_after/home_logo_check.png`
  - logo/header region diff vs `01-home-base-profile.png` improved from ~`24.53%` to ~`10.19%` changed pixels (threshold >16), confirming directional parity improvement.

## Recovery UX Update (2026-03-06)
- Reapplied post-onboarding celebration parity updates after workspace recovery:
  - CTA text: `You are all set! 🎉`
  - lighter dim overlay treatment
  - top token card area forced to opaque surface to fully hide underlying swipe-card strip
- Android-only random-test-token CTA remains removed to match iOS snapshot flow.
- Module-wise recovery references:
  - `Codegen/docs/learnings/2026-03-06-android-modulewise-recovery.md`
