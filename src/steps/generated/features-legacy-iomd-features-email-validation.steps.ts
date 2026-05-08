import { Given, Then, When } from "@wdio/cucumber-framework";
import { usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage } from "../../pages/generated/features-legacy-iomd-features-email-validation.page";

Then("user verifies the clicks on the transaction tab", async function () {
  await usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage.userVerifiesTheClicksOnTheTransactionTab();
});
When("user verifies the {string} tab", async function (notification: string) {
  await usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage.userVerifiesTheNotificationTab(notification);
});
Then("user clicks on the {string} tab", async function (notification: string) {
  await usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage.userClicksOnTheNotificationTab(notification);
});
When("user verifies the display of the email count text", async function () {
  await usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage.userVerifiesTheDisplayOfTheEmailCountText();
});
When("user clicks on the forgot password link {string}", async function (forgotpassword: string) {
  await usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage.userClicksOnTheForgotPasswordLinkForgotpassword(forgotpassword);
});
Then("user enters the {string} in the inputbox and clicks on the submit button", async function (emailid: string) {
  await usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage.userEntersTheEmailidInTheInputboxAndClicksOnTheSubmitButton(emailid);
});
Then("user verifies the display of the forgot email", async function () {
  await usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage.userVerifiesTheDisplayOfTheForgotEmail();
});
When("user clicks the mail and verifies the details present inside the tab", async function () {
  await usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage.userClicksTheMailAndVerifiesTheDetailsPresentInsideTheTab();
});

