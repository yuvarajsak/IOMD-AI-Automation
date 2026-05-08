# Step 9: Offers Tab

## Scope
- Replace the Android `Top 5 Offers` placeholder tab with a real offers experience.
- Match the iOS dashboard pattern: header actions, empty state, merchant selector, and large offer-content cards.
- Drive Android from the same imported Gmail email data already stored in Room.

## References
- iOS source of truth:
  - `iOS/IOMDAutofill/Modules/NovaDashboard/DashboardOffersViewController.swift`
  - `iOS/IOMDAutofill/Modules/NovaDashboard/DashboardOffersViewController+CollectionView.swift`
  - `iOS/IOMDAutofill/Modules/HomeDashboard/OfferCollectionViewCell.swift`
- iOS assets reused on Android:
  - `iOS/IOMDAutofill/Assets.xcassets/noOffersImage.imageset`
  - `iOS/IOMDAutofill/Assets.xcassets/NovaDashboard/n_importEmail.imageset`
- Android implementation:
  - `Android/app/src/main/java/com/iomd/android/i2iautofill/ui/OffersFragment.kt`
  - `Android/app/src/main/java/com/iomd/android/i2iautofill/persistence/InboxPersistenceDao.kt`

## Implementation Notes
- Query offer merchants from `Merchant` + `Emails` using Gmail-imported offer metadata already saved in Room.
- Query top offer cards from `Emails` + `EmailDetails`, ordered by latest imported offer first.
- Keep empty state CTA wired to the existing Gmail import flow.
- Use iOS offer empty-state and import-button assets for closer visual parity.

## Verification
- `./gradlew :app:compileQaDebugKotlin`
- `./gradlew :app:installQaDebug`
- Verify emulator states:
  - empty Offers tab matches the provided iOS empty-state snapshot
  - imported Gmail offer data renders merchant selector + offer cards
  - `Import Email` CTA opens the Android Gmail import flow

## Learnings
- Android already stored enough Gmail metadata to classify offers similarly to iOS; this step only needed new Room queries and UI, not a schema change.
- Merchant canonicalization work done for Messages also benefits the Offers tab because imported Gmail messages may arrive under subdomains.
