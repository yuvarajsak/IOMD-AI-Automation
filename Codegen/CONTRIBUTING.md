# Contributing Guide

## Workflow
1. Follow step order in `Codegen/steps/`.
2. Apply validation in `Codegen/docs/validation/checklist.md`.
3. Record reproducible learnings as append-only updates in the active step doc.
4. Keep iOS source immutable.

## Documentation Standard
- Canonical process docs live under `Codegen/docs/`.
- `Codegen/docs/` is the only operational source of truth.
- When process changes, update both canonical docs and machine-readable rules if applicable.

## Parity Rules
- iOS is primary implementation reference.
- Snapshot parity gates are mandatory when snapshots exist.
- For all image/icon requirements, use exact iOS assets.
