import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheEcoyaApplicationFeaturesLegacyIomdFeaturesEcoyaPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheEcoyaApplicationFeaturesLegacyIomdFeaturesEcoyaPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userCloseThePopupInEcoyaWebsite(): Promise<void> {
    await this.executeLegacyStep("user close the popup in Ecoya Website", {});
  }

  async userEntersDataInSigninPageForEcoyaWebsite(): Promise<void> {
    await this.executeLegacyStep("user enters data in signin page for Ecoya website", {});
  }

  async userClicksSigninButtonByOnlyNameInTheWebsite(signin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" button by only name in the Website", { "signin": signin });
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

  async userVerifiesLoginFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Login from interaction tab", {});
  }

  async userClicksForgotpasswordButtonByOnlyNameInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotPassword>\" button by only name in the Website", { "forgotpassword": forgotpassword });
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
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheecoyaapplicationfeatureslegacyiomdfeaturesecoyapage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheEcoyaApplicationFeaturesLegacyIomdFeaturesEcoyaPage();
