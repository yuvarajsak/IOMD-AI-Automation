# Step 11: Import Passwords

Implement and verify the **Import Passwords** and **Manual Password Management** flow within the Assistant tab.

## Summary of Changes
- Integrated **Password Management** as a sub-feature of the AI Assistant tab (`step05`).
- Created **Import Passwords** flow including:
  - Instructions screen for CSV export/import instructions.
  - Integration with system file picker for selecting `.csv` files.
  - CSV parsing and secure storage in the local database.
  - List view of compatible password managers with direct deep links.
- Implemented **Manual Password Entry**:
  - UI for adding new login details (Service, Username, Password).
  - Validation for required fields.
- Added **Feedback Collection** overlay for the import process to identify user issues or missing password managers.
- Verified parity with iOS behavior for password entry and list display.

## Verification Checklist
- [ ] 'Passwords' tab is accessible from AI Assistant top bar.
- [ ] 'Add new login details' opens the manual form.
- [ ] 'Import passwords' opens the tutorial/instructions screen.
- [ ] 'See password managers' shows the compatible list.
- [ ] File picker correctly opens for CSV selection.
- [ ] Imported passwords appear in the list view correctly.
- [ ] Feedback overlay is shown correctly after interaction or from 'here' button.

## Related Snapshots
Refer to the `snapshots` folder for visual references of the implemented screens and flows.
- [Refer to Snapshots](snapshots/README.md)
