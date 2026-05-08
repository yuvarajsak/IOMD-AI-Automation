import { Given, Then, When } from "@wdio/cucumber-framework";
import { validatestheauofilloperationinthecurativelifestylewebsiteafterenablingtheextensionandverifiesthedetailsarepresentinthetransactionviewfeatureslegacyiomdfeaturescurativelifestylepage } from "../../pages/generated/features-legacy-iomd-features-curative-life-style.page";

Then("user clicks on the enter button in the application", async function () {
  await validatestheauofilloperationinthecurativelifestylewebsiteafterenablingtheextensionandverifiesthedetailsarepresentinthetransactionviewfeatureslegacyiomdfeaturescurativelifestylepage.userClicksOnTheEnterButtonInTheApplication();
});
Then("user enters the password {string} and clicks on the enter button to proceed further", async function (password: string) {
  await validatestheauofilloperationinthecurativelifestylewebsiteafterenablingtheextensionandverifiesthedetailsarepresentinthetransactionviewfeatureslegacyiomdfeaturescurativelifestylepage.userEntersThePasswordPasswordAndClicksOnTheEnterButtonToProceedFurther(password);
});
When("user selects the product in Curative Lifestyle", async function () {
  await validatestheauofilloperationinthecurativelifestylewebsiteafterenablingtheextensionandverifiesthedetailsarepresentinthetransactionviewfeatureslegacyiomdfeaturescurativelifestylepage.userSelectsTheProductInCurativeLifestyle();
});
Then("User clicks on the add to cart button", async function () {
  await validatestheauofilloperationinthecurativelifestylewebsiteafterenablingtheextensionandverifiesthedetailsarepresentinthetransactionviewfeatureslegacyiomdfeaturescurativelifestylepage.userClicksOnTheAddToCartButton();
});
When("user clicks on the cart button", async function () {
  await validatestheauofilloperationinthecurativelifestylewebsiteafterenablingtheextensionandverifiesthedetailsarepresentinthetransactionviewfeatureslegacyiomdfeaturescurativelifestylepage.userClicksOnTheCartButton();
});
When("user clicks on the continue and payment to the product button", async function () {
  await validatestheauofilloperationinthecurativelifestylewebsiteafterenablingtheextensionandverifiesthedetailsarepresentinthetransactionviewfeatureslegacyiomdfeaturescurativelifestylepage.userClicksOnTheContinueAndPaymentToTheProductButton();
});

