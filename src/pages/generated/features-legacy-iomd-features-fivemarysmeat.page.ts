import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesFivemarysmeatPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesFivemarysmeatPage");
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

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userClicksForgetPasswordButtonInTheFivemarysWebsite(): Promise<void> {
    await this.executeLegacyStep("user clicks Forget Password  button in the fivemarys website", {});
  }

  async userEntersEmailInTheForm(): Promise<void> {
    await this.executeLegacyStep("user enters email in the form", {});
  }

  async userClicksSubmitButtonByOnlyNameInTheWebsite(submit: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<submit>\" button by only name in the Website", { "submit": submit });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
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

  async userClicksTheFirstProductToCheckout(): Promise<void> {
    await this.executeLegacyStep("user clicks the first product to checkout", {});
  }

  async userClicksAddToCartButtonInFivemarysWebsite(): Promise<void> {
    await this.executeLegacyStep("user clicks Add to cart button in fivemarys website", {});
  }

  async userClicksCheckoutOptionInFivemarysWebsite(): Promise<void> {
    await this.executeLegacyStep("user clicks checkout option in fivemarys website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberWithFormatAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website", {});
  }

  async userClicksPaynowButtonInFivemarysWebsite(): Promise<void> {
    await this.executeLegacyStep("user clicks Paynow button in Fivemarys website", {});
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

  async userLaunchesTheWebsiteRegisterurl(registerurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<registerurl>\"", { "registerurl": registerurl });
  }

  async userLaunchesTheWebsiteLoginurl(loginurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<loginurl>\"", { "loginurl": loginurl });
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefivemarysapplicationfeatureslegacyiomdfeaturesfivemarysmeatpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesFivemarysmeatPage();
