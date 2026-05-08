## Canonical Snapshot Paths (Nearby)
- `Codegen/steps/step05_assistant_tab/snapshots/01-assistant-221847.png`
- `Codegen/steps/step05_assistant_tab/snapshots/02-assistant-221848.png`
- `Codegen/steps/step05_assistant_tab/snapshots/03-assistant-221850.png`
- `Codegen/steps/step05_assistant_tab/snapshots/04-assistant-221852.png`
- `Codegen/steps/step05_assistant_tab/snapshots/05-assistant-221855.png`
- `Codegen/steps/step05_assistant_tab/snapshots/06-assistant-221900.png`
- `Codegen/steps/step05_assistant_tab/snapshots/07-assistant-221909.png`
- `Codegen/steps/step05_assistant_tab/snapshots/08-assistant-221912.png`
- `Codegen/steps/step05_assistant_tab/snapshots/09-assistant-221916.png`
- `Codegen/steps/step05_assistant_tab/snapshots/10-assistant-221924.png`
- `Codegen/steps/step05_assistant_tab/snapshots/11-assistant-221926.png`
- `Codegen/steps/step05_assistant_tab/snapshots/12-assistant-221928.png`
- `Codegen/steps/step05_assistant_tab/snapshots/13-assistant-221932.png`
- `Codegen/steps/step05_assistant_tab/snapshots/14-assistant-221944.png`
- `Codegen/steps/step05_assistant_tab/snapshots/15-assistant-221950.png`
- `Codegen/steps/step05_assistant_tab/snapshots/16-assistant-222002.png`
- `Codegen/steps/step05_assistant_tab/snapshots/17-assistant-222004.png`

# Step05_AssistantTab: Assistant Tab Implementation

## Objective
Implement the Assistant tab experience with iOS-equivalent structure and behavior:
- Assistant header and top context text
- Horizontal category chips (`Passwords`, `Cards`, `Personal`, `Agent`, `Activities`)
- Section-specific content states (including Agent “Coming soon” content)
- Snapshot-matched UI flow and component geometry for all provided Step05 states

`Codegen/docs/validation/checklist.md` must be respected throughout code generation.
Implementation order rule: generate UI from iOS code/assets first; use snapshots only at the end as reference for parity verification and tuning.

## Mandatory Rule For This Step
- During code generation for Step05 and all future steps, `Codegen/docs/validation/checklist.md` is a strict requirement.
- If snapshots exist, pixel-by-pixel comparison is mandatory before Step05 can be marked complete.

## Task Details
1. **Assistant Scaffold**:
   - Implement Assistant tab content as a first-class tab destination.
   - Preserve Step04 tab-shell behavior and selected/unselected icon states.

2. **Assistant Header + Chips**:
   - Implement iOS-equivalent title/subtitle treatment.
   - Implement horizontal chip controls for `Passwords`, `Cards`, `Personal`, `Agent`, and `Activities`.
   - Match selected chip style (pill, icon/text visibility, spacing, radius) to iOS and Step05 snapshots.

3. **Assistant Section States**:
   - Render each section with iOS-equivalent empty/content state visuals.
   - Implement Agent section content and tags panel using iOS assets (`n_agentTags`) and text parity.

4. **Parity Requirements**:
   - Respect exact control geometry and spacing from snapshots.
   - Keep iOS source as primary while implementing; use snapshots as final-reference parity check.
   - Image/icon usage must map to exact iOS assets (no random/substitute assets).

## Verification Requirements
- Run sync-equivalent before build:
  - `./gradlew help`
- Run step build verification:
  - `./gradlew :app:assembleQaDebug`
- Verify app launch/readiness for Step05 Assistant flow.
- Confirm iOS folder remains unchanged.
- **MANDATORY**: Execute all applicable checks in `Codegen/docs/validation/checklist.md`.
- **MANDATORY**: Perform pixel-by-pixel comparison against all Step05 snapshots.

## Completion
After all applicable checklist items pass (including snapshot pixel check gate), summarize Step05 progress and wait for user confirmation before the next step.
