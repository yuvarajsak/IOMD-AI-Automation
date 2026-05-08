# Step 12: Search Emails

## Scope
- Add the global search-email flow used from the dashboard header.
- Match the iOS search experience for empty state, typed queries, recents, merchant matches, message matches, and detail handoff.
- Capture reference states for merchant-specific result lists and merchant detail landing pages.

## References
- iOS source of truth:
  - `iOS/IOMDAutofill/Modules/Search`
  - `iOS/IOMDAutofill/Modules/NovaDashboard`
- Search-related iOS screens shown in the provided snapshots:
  - search entry with back button and inline clear action
  - recent merchants and recent searches
  - business hit rows plus message hit rows
  - merchant detail landing pages for Amazon, Amazonpay, and Flipkart
  - message detail screens opened from search results

## Implementation Notes
- Search should support both merchant matches and message/body/subject matches.
- Recent merchants and recent searches are separate sections and can coexist.
- Result screens may route into existing business detail and email detail surfaces instead of introducing new containers.
- Keep this step focused on search discovery and navigation parity, not on rebuilding the downstream detail screens from scratch.

## Verification
- Confirm the search screen opens from header search actions used in the app.
- Verify empty search, active query, and recents states against the provided iOS references.
- Verify merchant result taps open the expected merchant detail page.
- Verify message result taps open the expected email detail page.

## Related Snapshots
- See `snapshots/README.md` for the curated iOS references used for this step.
