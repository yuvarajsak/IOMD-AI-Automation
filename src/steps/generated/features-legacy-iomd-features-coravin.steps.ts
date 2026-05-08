import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage } from "../../pages/generated/features-legacy-iomd-features-coravin.page";

When("user clicks create account button", async function () {
  await i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage.userClicksCreateAccountButton();
});
When("user enters password in the form", async function () {
  await i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage.userEntersPasswordInTheForm();
});
Then("user clicks {string} button by only name in the IOMD Transactions", async function (backbutton: string) {
  await i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage.userClicksBackbuttonButtonByOnlyNameInTheIomdTransactions(backbutton);
});
Then("user verifies Credentials saved", async function () {
  await i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage.userVerifiesCredentialsSaved();
});
Then("user verifies delete icon", async function () {
  await i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage.userVerifiesDeleteIcon();
});
When("user clicks on the purchase tab", async function () {
  await i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage.userClicksOnThePurchaseTab();
});
When("user enters email in the form", async function () {
  await i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage.userEntersEmailInTheForm();
});

