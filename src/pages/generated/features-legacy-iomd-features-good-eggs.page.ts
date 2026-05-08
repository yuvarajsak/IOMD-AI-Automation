import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGoodeggsApplicationFeaturesLegacyIomdFeaturesGoodEggsPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGoodeggsApplicationFeaturesLegacyIomdFeaturesGoodEggsPage");
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

  async userClicksSendbuttonButtonByOnlyNameInTheWebsite(sendbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<sendbutton>\" button by only name in the Website", { "sendbutton": sendbutton });
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

  async userSelectsTokenisedUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Username from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userClicksSigninbuttonButtonByNameInTheWebsite(signinbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignInbutton>\" button by name in the Website", { "signinbutton": signinbutton });
  }

  async userLaunchesTheGoodeggsWebsiteCarturl(carturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the GoodEggs website \"<cartURL>\"", { "carturl": carturl });
  }

  async userClicksCheckoutButtonByNameInTheWebsite(checkout: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<checkout>\" button by name in the Website", { "checkout": checkout });
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber are filled as expected for the Website", {});
  }

  async iFillAddressForGoodeggs(): Promise<void> {
    await this.executeLegacyStep("I fill Address for Goodeggs", {});
  }

  async userClicksSavecontinueButtonByNameInTheWebsite(savecontinue: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SaveContinue>\" button by name in the Website", { "savecontinue": savecontinue });
  }

  async userClicksSelectButtonByStatictextWithIndexInTheWebsite(select: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<select>\" button by StaticText with \"<index>\" in the Website", { "select": select, "index": index });
  }

  async userFillsTheCardDetailsInGoodeggsWebsite(): Promise<void> {
    await this.executeLegacyStep("user Fills the card details in GoodEggs website", {});
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userAcceptsTheUpdatePopupForExistingCardsInIomdProfile(): Promise<void> {
    await this.executeLegacyStep("user accepts the update popup for existing cards in IOMD Profile", {});
  }

  async userVerifiesTheCardDetailsIsSavedInIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user verifies the card details is saved in IOMD Application", {});
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

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthegoodeggsapplicationfeatureslegacyiomdfeaturesgoodeggspage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGoodeggsApplicationFeaturesLegacyIomdFeaturesGoodEggsPage();
