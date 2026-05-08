import { BasePage } from "../base.page";

export class ValidatesTheAuofillOperationInTheCurativeLifestyleWebsiteAfterEnablingTheExtensionAndVerifiesTheDetailsArePresentInTheTransactionviewFeaturesLegacyIomdFeaturesCurativeLifeStylePage extends BasePage {
  constructor() {
    super("ValidatesTheAuofillOperationInTheCurativeLifestyleWebsiteAfterEnablingTheExtensionAndVerifiesTheDetailsArePresentInTheTransactionviewFeaturesLegacyIomdFeaturesCurativeLifeStylePage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userSelectsTokenisedEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Email from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userClicksOnTheEnterButtonInTheApplication(): Promise<void> {
    await this.executeLegacyStep("user clicks on the enter button in the application", {});
  }

  async userSwitchesBackToTheIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user switches back to the IOMD application", {});
  }

  async userVerifiesAndClicksOnTheBusinessTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on the business tab", {});
  }

  async userClicksBusinessBusinessByOnlyNameInTheIomdTransactions(business: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<business>\" business by only name in the IOMD Transactions", { "business": business });
  }

  async userVerifiesOthersFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Others from interaction tab", {});
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userEntersThePasswordPasswordAndClicksOnTheEnterButtonToProceedFurther(password: string): Promise<void> {
    await this.executeLegacyStep("user enters the password \"<passWord>\" and clicks on the enter button to proceed further", { "password": password });
  }

  async userSelectsTheProductInCurativeLifestyle(): Promise<void> {
    await this.executeLegacyStep("user selects the product in Curative Lifestyle", {});
  }

  async userClicksOnTheAddToCartButton(): Promise<void> {
    await this.executeLegacyStep("User clicks on the add to cart button", {});
  }

  async userClicksOnTheCartButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the cart button", {});
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber are filled as expected for the Website", {});
  }

  async userClicksOnTheContinueAndPaymentToTheProductButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue and payment to the product button", {});
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userClicksPaynowButtonByOnlyNameInTheWebsite(paynow: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Paynow>\" button by only name in the Website", { "paynow": paynow });
  }

  async userVerifiesCheckoutFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Checkout from interaction tab", {});
  }

  async userClicksPurchaseButtonByOnlyStaictextInTheWebsite(purchase: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<purchase>\" button by only Staictext in the Website", { "purchase": purchase });
  }

  async userVerifiesTheRecentRecordUnderPurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the recent record under purchase tab", {});
  }
}

export const validatestheauofilloperationinthecurativelifestylewebsiteafterenablingtheextensionandverifiesthedetailsarepresentinthetransactionviewfeatureslegacyiomdfeaturescurativelifestylepage = new ValidatesTheAuofillOperationInTheCurativeLifestyleWebsiteAfterEnablingTheExtensionAndVerifiesTheDetailsArePresentInTheTransactionviewFeaturesLegacyIomdFeaturesCurativeLifeStylePage();
