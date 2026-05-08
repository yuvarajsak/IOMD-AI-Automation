import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage } from "../../pages/generated/features-legacy-iomd-features-iomdapp-launch.page";

When("user verifies the display of the {string} in the list", async function (userfullname: string) {
  await i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage.userVerifiesTheDisplayOfTheUserfullnameInTheList(userfullname);
});
When("user verifies the {string} and {string} and {string} in the page", async function (mailid: string, phonenumber: string, addressdetails: string) {
  await i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage.userVerifiesTheMailidAndPhonenumberAndAddressdetailsInThePage(mailid, phonenumber, addressdetails);
});
Then("user veriifes the dispay of the {string} in the page", async function (usertype: string) {
  await i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage.userVeriifesTheDispayOfTheUsertypeInThePage(usertype);
});
When("user verifies the  anonomyous {string} and {string} and {string} in the user profile page", async function (anonomyousmailid: string, anonomyousphonenumber: string, anonomyousaddressdetails: string) {
  await i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage.userVerifiesTheAnonomyousAnonomyousmailidAndAnonomyousphonenumberAndAnonomyousaddressdetailsInTheUserProfilePage(anonomyousmailid, anonomyousphonenumber, anonomyousaddressdetails);
});
Then("user veriifes the anonomyous dispay of the {string} in the user profile page", async function (anonomyoususertype: string) {
  await i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage.userVeriifesTheAnonomyousDispayOfTheAnonomyoususertypeInTheUserProfilePage(anonomyoususertype);
});
When("User verifies the display of the no profile found message after entering invalid details in the user page", async function () {
  await i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage.userVerifiesTheDisplayOfTheNoProfileFoundMessageAfterEnteringInvalidDetailsInTheUserPage();
});
When("User verifies the display of the enter valid email id alert message popup after entering mail id in incorrect format", async function () {
  await i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage.userVerifiesTheDisplayOfTheEnterValidEmailIdAlertMessagePopupAfterEnteringMailIdInIncorrectFormat();
});

