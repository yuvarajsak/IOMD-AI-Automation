# Global Project Rules

## Image / Asset Parity (Mandatory)
- For any screen or feature with an image/icon/illustration requirement, Android must use the exact corresponding asset from `iOS/`.
- Do not use random, placeholder, generated, stock, emoji, or substitute images when an iOS asset exists.
- Keep visual parity by preserving the same asset identity and intended usage from iOS.
- If an iOS asset is missing or ambiguous, stop and resolve the exact source asset before implementation.

## Non-negotiable Parity Rules
1. All Android code generation must be equivalent to iOS source behavior and structure: assets, fonts, logic, UI, API calls, and storage.
2. Generate code from equivalent iOS implementation first; use snapshots only at the end for parity verification/fine-tuning, not as the primary generation source.
3. No random/substitute assets; always read and map the equivalent iOS assets.
4. Code must be production standard.
5. For text/content parity: if text is in-app/static on iOS, keep Android in-app/static; if text is from Firebase Remote Config on iOS, Android must use Firebase Remote Config as well.
6. Match button visual design and geometry (shape, radius, fill/gradient, alignment) to iOS/snapshot parity.
7. Prefer running iOS and Android for direct UX comparison; otherwise use provided snapshots. Iterate with repeated fix-and-compare cycles until parity is achieved.
8. No arbitrary hardcoding or structure drift; map iOS UI/data structures to equivalent Android structures (for example list/table-style views should map to equivalent Android list/table patterns).
9. Match iOS Core Data models to equivalent Android Room models for the same persisted scope.

## Verification Trigger Rule
- If user requests `verify step3` or `verify step4` (or equivalent wording), verification must include both:
  - iOS-port parity validation for that step scope (logic/UI/assets/API/storage as applicable), and
  - snapshot parity validation for that step scope using the corresponding `snapshots/` folder.
- A step verification request is not complete unless both validations are reported.

## Post-Step Mandatory Verification Rule
- After each step development completion, explicit verification is mandatory before marking the step done.
- Mandatory verification report must include:
  - iOS-port parity outcome for that step scope, and
  - snapshot parity outcome for that step scope when snapshots exist.
- If either required outcome is missing, the step must remain open.

## Backup/Restore Verification Rule
- For backup/restore scope, verification is not complete unless all of the following are reported:
  - Room payload parity to iOS Core Data scope.
  - Secure-store payload parity to iOS Keychain scope.
  - Cross-instance restore success (source instance backup -> fresh target instance import).
  - Snapshot parity evidence for each provided backup/restore UX state.

## Step04 Welcome Email Parity Blockers (Mandatory)
- Step04 is not complete unless welcome-email detail behavior mirrors iOS for both data and interactivity.
- Android must render welcome-email content from Room-persisted payload that originates from the iOS-equivalent Remote Config source.
- Android must implement WebView JS-native parity for welcome email:
  - JS request channel compatible with `getFromNodeApp`,
  - native callbacks for tokenized email/profile picture,
  - `iomd-app://` custom actions (`back-btn`, `share-btn`, `copy-my-token`) mapped to app behavior.
- Placeholder-only/static email detail pages are not acceptable when Room HTML payload exists.
