# Step14_Buy_Again: Shopify Checkout And IOMD Buy Again Validation

## Objective
Automate the Buy Again journey in the Codegen runtime framework after the current skip-Gmail onboarding path has completed.

This step is separated from the generated legacy Buy Again runner so future Codegen tasks can update one clear feature, page object, step definition, and config path.

## Runtime Automation Paths
- Feature: `features/codegen/step14-buy-again.feature`
- Page object: `src/pages/codegen-buy-again.page.ts`
- Step definitions: `src/steps/codegen-buy-again.steps.ts`
- iOS config: `wdio.codegen.buyagain.ios.conf.ts`
- Dry-run validator: `scripts/dry-run-codegen-buyagain.ts`

## Covered Flow
1. Complete Codegen Step03 onboarding using the skip-Gmail Commerce Token path.
2. Open Shopify storefront.
3. Enter Shopify store password.
4. Enable the node Safari extension.
5. Open product page directly.
6. Add product to cart and start checkout.
7. Complete checkout contact details and address suggestion.
8. Enter payment details.
9. Submit order.
10. Track order from the thank-you page.
11. Return to IOMD.
12. Select the business/product and validate Buy Again.

## Commands
```sh
npm run dryrun:codegen:buyagain
npm run typecheck
npm run test:codegen:buyagain:ios
```

## Current Status
- Dry run: passed on 2026-05-08.
- TypeScript validation: passed on 2026-05-08.
- Live iOS Appium execution: pending.

## Known Runtime Risk
The legacy execution reached Safari and failed because `Add to cart` was present in the iOS accessibility tree but hidden by Shopify/Safari overlay state. The Codegen page object now tries a web-context click before falling back to native selectors, but this must be confirmed in the live iOS run.
