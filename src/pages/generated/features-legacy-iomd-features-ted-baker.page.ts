import { BasePage } from "../base.page";

export class ValidatesTheAuofillOperationInTheTedbakerWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesTedBakerPage extends BasePage {
  constructor() {
    super("ValidatesTheAuofillOperationInTheTedbakerWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesTedBakerPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userAcceptsTheAcceptAllCookiesButton(): Promise<void> {
    await this.executeLegacyStep("user accepts the accept all cookies button", {});
  }

  async userScrollToNewsletterSignupForm(): Promise<void> {
    await this.executeLegacyStep("user scroll to newsletter signup form", {});
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

  async userClicksWomenButtonByOnlyNameInTheWebsite(women: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<women>\" button by only name in the Website", { "women": women });
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

  async userClicksOnTheGoToSiteButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the go to site button", {});
  }

  async userLaunchesTheWebsiteProducturl(producturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<producturl>\"", { "producturl": producturl });
  }

  async userSelectsTheFirstProductInTedbakerForCheckingOut(): Promise<void> {
    await this.executeLegacyStep("user selects the first product in tedbaker for checking out", {});
  }

  async userClicksAddtobagButtonByOnlyNameInTheWebsite(addtobag: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<addToBag>\" button by only name in the Website", { "addtobag": addtobag });
  }

  async userLaunchesTheWebsiteCarturl(carturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<carturl>\"", { "carturl": carturl });
  }

  async userClicksCheckoutbtnButtonByOnlyNameInTheWebsite(checkoutbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<checkoutbtn>\" button by only name in the Website", { "checkoutbtn": checkoutbtn });
  }

  async userClicksConnectbtnButtonByOnlyNameInTheWebsite(connectbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<connectbtn>\" button by only name in the Website", { "connectbtn": connectbtn });
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userSelectsAddressFromDropdownInTedbaker(): Promise<void> {
    await this.executeLegacyStep("user selects address from dropdown in Tedbaker", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber are filled as expected for the Website", {});
  }

  async userClicksStddeliverybtnButtonByOnlyStaictextInTheWebsite(stddeliverybtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<stdDeliverybtn>\" button by only Staictext in the Website", { "stddeliverybtn": stddeliverybtn });
  }

  async userClicksContinuepaymentButtonByOnlyNameInTheWebsite(continuepayment: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continuePayment>\" button by only name in the Website", { "continuepayment": continuepayment });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userClicksCompleteorderButtonByOnlyNameInTheWebsite(completeorder: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<completeorder>\" button by only name in the Website", { "completeorder": completeorder });
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

export const validatestheauofilloperationinthetedbakerwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturestedbakerpage = new ValidatesTheAuofillOperationInTheTedbakerWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesTedBakerPage();
