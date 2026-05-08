import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2ivalidatesiomdpayfeatureandcheeckstheorderplaceddatainmagentofeatureslegacyiomdpayfeatureiomdpaywithmagentovalidationpage } from "../../pages/generated/features-legacy-iomd-pay-feature-iomd-pay-with-magento-validation.page";

When("user verifies the amount with shipping cost", async function () {
  await i2ivalidatesiomdpayfeatureandcheeckstheorderplaceddatainmagentofeatureslegacyiomdpayfeatureiomdpaywithmagentovalidationpage.userVerifiesTheAmountWithShippingCost();
});
When("user verifies the placed order is displayed in IOMDPay Admin", async function () {
  await i2ivalidatesiomdpayfeatureandcheeckstheorderplaceddatainmagentofeatureslegacyiomdpayfeatureiomdpaywithmagentovalidationpage.userVerifiesThePlacedOrderIsDisplayedInIomdpayAdmin();
});
When("user completes onboarding flow with invalid address", async function () {
  await i2ivalidatesiomdpayfeatureandcheeckstheorderplaceddatainmagentofeatureslegacyiomdpayfeatureiomdpaywithmagentovalidationpage.userCompletesOnboardingFlowWithInvalidAddress();
});
When("user fills tokenised personal information with invalid address", async function () {
  await i2ivalidatesiomdpayfeatureandcheeckstheorderplaceddatainmagentofeatureslegacyiomdpayfeatureiomdpaywithmagentovalidationpage.userFillsTokenisedPersonalInformationWithInvalidAddress();
});
When("user select invalid address from list", async function () {
  await i2ivalidatesiomdpayfeatureandcheeckstheorderplaceddatainmagentofeatureslegacyiomdpayfeatureiomdpaywithmagentovalidationpage.userSelectInvalidAddressFromList();
});

