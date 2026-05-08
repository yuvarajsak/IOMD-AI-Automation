import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAmazonApplicationFeaturesLegacyIomdFeaturesAmazonPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAmazonApplicationFeaturesLegacyIomdFeaturesAmazonPage");
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

  async userClicksSigninButtonByOnlyStaictextInTheWebsite(signin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<signin>\" button by only Staictext in the Website", { "signin": signin });
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

  async userClicksContinueButtonByOnlyNameInTheWebsite(continueValue: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continue>\" button by only name in the Website", { "continueValue": continueValue });
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

  async userClicksCreateaccountButtonByOnlyNameInTheWebsite(createaccount: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<createaccount>\" button by only name in the Website", { "createaccount": createaccount });
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

  async userEntersDataInSignupPageForAmazonWebsite(): Promise<void> {
    await this.executeLegacyStep("user enters data in signup page for amazon website", {});
  }

  async userClicksContinueBtnButtonByOnlyNameInTheWebsite(continueBtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continue btn>\" button by only name in the Website", { "continueBtn": continueBtn });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userVerifiesLoginFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Login from interaction tab", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheamazonapplicationfeatureslegacyiomdfeaturesamazonpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAmazonApplicationFeaturesLegacyIomdFeaturesAmazonPage();
