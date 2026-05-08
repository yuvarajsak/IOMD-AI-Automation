import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheSkullcandyApplicationFeaturesLegacyIomdFeaturesSkullCandyPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheSkullcandyApplicationFeaturesLegacyIomdFeaturesSkullCandyPage");
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

  async userClicksForgetpwdButtonByOnlyNameInTheWebsite(forgetpwd: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<forgetPwd>\" button by only name in the Website", { "forgetpwd": forgetpwd });
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

  async userVerifiesPwdchangeFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies PwdChange from interaction tab", {});
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

  async userClicksSubmitbuttonButtonByOnlyNameInTheWebsite(submitbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<submitbutton>\" button by only name in the Website", { "submitbutton": submitbutton });
  }

  async userVerifiesOthersFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Others from interaction tab", {});
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userClicksCartButtonByNameWithIndexInTheWebsite(cart: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<cart>\" button by name with \"<index>\" in the Website", { "cart": cart, "index": index });
  }

  async userLaunchesTheWebsiteCarturl(carturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<carturl>\"", { "carturl": carturl });
  }

  async userClicksProceedcheckoutButtonByOnlyStaictextInTheWebsite(proceedcheckout: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<proceedcheckout>\" button by only Staictext in the Website", { "proceedcheckout": proceedcheckout });
  }

  async userFillsAddressForSkullcandy(): Promise<void> {
    await this.executeLegacyStep("user fills address for skullcandy", {});
  }

  async userClicksContinueButtonByOnlyNameInTheWebsite(continueValue: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continue>\" button by only name in the Website", { "continueValue": continueValue });
  }

  async userClicksCardselectionButtonByOnlyStaictextInTheWebsite(cardselection: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<cardSelection>\" button by only Staictext in the Website", { "cardselection": cardselection });
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userClicksPlaceorderButtonByOnlyNameInTheWebsite(placeorder: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<placeorder>\" button by only name in the Website", { "placeorder": placeorder });
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

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheskullcandyapplicationfeatureslegacyiomdfeaturesskullcandypage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheSkullcandyApplicationFeaturesLegacyIomdFeaturesSkullCandyPage();
