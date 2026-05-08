# Step 13: Backup Restore

## Scope
- Implement Android backup/restore flow with UX parity to iOS backup/restore screens and interactions.
- Match iOS data strategy with Android equivalents:
  - iOS Core Data backup -> Android Room database backup.
  - iOS Keychain backup -> Android secure storage backup (encrypted/shared secure store equivalent used by app).
- Ensure end-to-end restore works across app instances/devices/emulators using exported backup files.

## References
- iOS source of truth:
  - `iOS/IOMDAutofill/Modules/BackupRestore`
- iOS UX snapshots for this step:
  - `Codegen/steps/step13_backup_restore/snapshots/` (24 reference images: original 14 from 2026-04-28 plus 10 restore additions from 2026-04-30)

## Implementation Notes
- Backup package must include both:
  - Room DB payload required for user/account/email/import state.
  - Secure credential/token payload required for parity with iOS Keychain-backed restore behavior.
- Restore must support import from system file picker and apply data atomically (or with rollback-safe behavior).
- Keep toolbar/header spacing, back icon sizing, button geometry, and step-to-step UX progression aligned to iOS references.
- Restore parity must include the added 2026-04-30 states for passcode gate, PIN entry, in-progress restore, success completion, restored home state, generic restore failure, share sheet after failure, incorrect-password failure copy, deleted-tokenized-email failure, and already-onboarded-device failure.

## Verification (Mandatory)
1. Build and run:
   - `./gradlew :app:compileQaDebugKotlin`
   - `./gradlew :app:assembleQaDebug`
   - `./gradlew :app:installQaDebug`
2. Snapshot parity:
   - Compare Android runtime screens against every snapshot in `snapshots/`.
   - Record per-screen match percentage and final aggregate parity.
3. Cross-instance restore (required for pass):
   - On emulator/device A, generate backup file.
   - Install/launch fresh app instance on emulator/device B (or clear app data).
   - Import same backup file and complete restore flow.
   - Verify restored data (accounts/import progress/email records/tokens as applicable) and successful UX completion state.

## Learnings
- Add reproducible evidence (commands, screenshots, and DB/token verification notes) directly to this file whenever backup/restore logic changes.
- Backup/restore step cannot be marked complete with only same-instance checks; cross-instance import is mandatory.
