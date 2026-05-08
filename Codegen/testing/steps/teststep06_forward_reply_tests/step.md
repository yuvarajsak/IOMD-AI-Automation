# TestStep06_ForwardReplyTests

## Development Source Mapping

- Development step: `Codegen/steps/step07_forward_reply_email/step.md`
- Snapshot folder: `Codegen/steps/step07_forward_reply_email/snapshots`

## Objective

Generate automation for forward and reply flows including compose prefill, keyboard behavior, validation, send action, and exit confirmation if present.

## Test Scope

- reply entry from detail
- forward entry from detail
- prefilled subject or recipient state
- compose validation
- keyboard open and dismiss
- send success and failure states

## Core Test Cases

- `testReplyFlow()`
- `testForwardFlow()`
- `testComposeValidation()`
- `testSendSuccess()`
- `testSendFailure()`

## Findings and Learnings

- Append forward and reply test learnings here.
