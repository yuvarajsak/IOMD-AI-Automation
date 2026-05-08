import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage } from "../../pages/generated/features-legacy-iomd-features-buy-again-endto-end.page";

When("user completes onboarding flow", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userCompletesOnboardingFlow();
});
When("user launches the website {string}", async function (url: string) {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userLaunchesTheWebsiteUrl(url);
});
When("user enters the store password", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userEntersTheStorePassword();
});
When("user enables node extension", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userEnablesNodeExtension();
});
Then("user selects first product and proceeds to checkout", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userSelectsFirstProductAndProceedsToCheckout();
});
When("user enters checkout contact details and selects suggested address", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userEntersCheckoutContactDetailsAndSelectsSuggestedAddress();
});
When("user enters card details and closes keyboard", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userEntersCardDetailsAndClosesKeyboard();
});
Then("user clicks Pay Now button", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userClicksPayNowButton();
});
When("user clicks on track my order button from thank you page", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userClicksOnTrackMyOrderButtonFromThankYouPage();
});
When("user switches back to the IOMD application", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userSwitchesBackToTheIomdApplication();
});
When("user selects first business and clicks buy again", async function () {
  await tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage.userSelectsFirstBusinessAndClicksBuyAgain();
});
