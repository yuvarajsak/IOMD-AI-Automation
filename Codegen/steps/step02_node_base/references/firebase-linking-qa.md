# Firebase Linking (QA Only - Step02)

Step02 must link Firebase for the `qa` flavor only. `dev` and `prod` Firebase linking will be done later.

## Required Files
- Source QA config: `Codegen/steps/step02_node_base/references/firebase/google-services-qa.json`
- Android destination: `Android/app/src/qa/google-services.json`

## Required Gradle Setup
1. Root plugin declaration in `Android/build.gradle.kts`:
```kotlin
plugins {
  id("com.google.gms.google-services") version "4.4.4" apply false
}
```

2. App plugin declaration in `Android/app/build.gradle.kts`:
```kotlin
plugins {
  id("com.google.gms.google-services")
}
```

3. Firebase dependencies in `Android/app/build.gradle.kts`:
```kotlin
dependencies {
  implementation(platform("com.google.firebase:firebase-bom:32.8.1"))
  implementation("com.google.firebase:firebase-analytics")
  implementation("com.google.firebase:firebase-config")
}
```

## Flavor Scope Rule
- Step02: QA Firebase only.
- Do not add `Android/app/src/dev/google-services.json` or `Android/app/src/prod/google-services.json` in Step02.
- QA package/application ID must match the client package inside QA `google-services.json` (avoid adding a QA applicationId suffix unless the Firebase client is configured for it).

## Verification
- Run `./gradlew help`
- Run `./gradlew :app:assembleQaDebug`
- Confirm QA build succeeds with the QA Firebase config present.

## Operational Learnings (2026-03-04)
- For QA debug builds using Firebase Debug App Check provider, Firebase App Check can return `403 App attestation failed` until the debug token is allowlisted in Firebase Console.
- If App Check token generation fails, downstream API requests that require `x-firebase-appcheck` cannot proceed.
- Recommended verification command during QA troubleshooting:
  - `adb logcat -s IOMD_API`

## Emulator Fallback Learning (2026-03-04)
- For QA emulator/simulator runs aligned with iOS behavior:
  - If App Check token cannot be acquired, create-token API may proceed with `x-node-token` only.
- For real-device runs:
  - Keep strict App Check requirement (`x-firebase-appcheck`) and fail request when token is unavailable.
- Ensure emulator detection includes modern AVD signatures (for example `sdk_gphone*`, `ranchu`, `goldfish`, `emu*`) to avoid false real-device classification.

## Remote Config Initialization Learning (2026-03-04)
- Step02 Firebase baseline should initialize Remote Config in app startup:
  - set config settings (`minimumFetchInterval` environment-aware),
  - call `fetchAndActivate()`.
- For Remote Config-backed text parity, avoid Android hardcoded fallback text values; source from remote keys.
- If iOS persists Remote Config JSON (Core Data), Android must persist equivalent payload fields in Room before display (no UI hardcoded fallback for that scope).
- Runtime verification mode (when requested): disable local/default RC value mapping and validate UI only against live Firebase RC responses to catch missing QA keys early.
- Remote Config Validation Baseline (2026-03-04): `activated=false` in `fetchAndActivate` can be misleading—it simply means no new changes were applied over the local cache. To reliably verify new Firebase values, clear app storage (`pm clear`) to force a fresh `activated=true` state.

