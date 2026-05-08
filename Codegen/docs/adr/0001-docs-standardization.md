# 0001 Docs Standardization

## Status
Accepted

## Context
Project guidance existed primarily as free-form step/checklist text files.
A standardized structure was needed while preserving all historical learnings.

## Decision
Adopt canonical docs under `Codegen/`:
- Step guides under `Codegen/steps/`
- Validation under `Codegen/docs/validation/`
- Contribution + architecture docs under `Codegen/`
- Keep legacy text copies for historical reference only

## Consequences
- Process becomes easier to maintain and automate.
- Existing learnings remain preserved via full-content migration.
