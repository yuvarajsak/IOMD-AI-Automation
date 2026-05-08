# Step 8: Settings Import Emails

## Scope
- Implement the Settings tab `Import emails` flow from iOS on Android.
- Use the provided Gmail OAuth client for the `Connect Gmail` action.
- Store the Gmail OAuth reference JSON inside this step for reproducible setup.

## References
- Gmail OAuth client JSON:
  - `Codegen/steps/step08_settings_import_emails/references/gmail/client_secret_486739002876-sebpdkff9q2a3kj3i1vuti5gfoei9c93.apps.googleusercontent.com.json`
- Android runtime asset:
  - `Android/app/src/main/assets/gmail_client_secret.json`
- iOS source of truth:
  - `iOS/IOMDAutofill/Modules/ImportEmail/ImportEmailStartVC.swift`
  - `iOS/IOMDAutofill/Modules/ImportEmail/ImportEmailInProgressVC.swift`
  - `iOS/IOMDAutofill/Modules/ImportEmail/ImportEmailCompletedVC.swift`
  - `iOS/IOMDAutofill/Modules/ImportEmail/GmailAuthManager.swift`

## Implementation Notes
- Use AppAuth on Android to mirror the iOS OAuth code-flow pattern.
- Redirect scheme for this client:
  - `com.googleusercontent.apps.486739002876-sebpdkff9q2a3kj3i1vuti5gfoei9c93`
- Redirect URI:
  - `com.googleusercontent.apps.486739002876-sebpdkff9q2a3kj3i1vuti5gfoei9c93:/oauthredirect`
- Required Gmail scope:
  - `https://www.googleapis.com/auth/gmail.readonly`

## Verification
- `./gradlew :app:compileQaDebugKotlin`
- `./gradlew :app:assembleQaDebug`
- Verify Settings → Import emails → Connect Gmail launches Google auth and continues into Android import-email progress/completion screens.

## Learnings
- The provided client JSON is an installed-app OAuth config and does not include a client secret; Android should follow the PKCE/native-app flow just like iOS.
- The existing Android Room schema already contains `UserAccounts`, `GmailImportProgress`, and `ImportHistory`, so this step can add DAO access without a schema change.
