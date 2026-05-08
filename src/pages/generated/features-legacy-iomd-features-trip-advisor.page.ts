import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTripadvisorApplicationFeaturesLegacyIomdFeaturesTripAdvisorPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTripadvisorApplicationFeaturesLegacyIomdFeaturesTripAdvisorPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksMyaccountButtonByNameInTheWebsite(myaccount: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<MyAccount>\" button by name in the Website", { "myaccount": myaccount });
  }

  async userClicksSigninButtonByNameInTheWebsite(signin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" button by name in the Website", { "signin": signin });
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

  async userClicksForgotpasswordButtonByNameInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotPassword>\" button by name in the Website", { "forgotpassword": forgotpassword });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userClicksSendlinkButtonByOnlyNameInTheWebsite(sendlink: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<sendlink>\" button by only name in the Website", { "sendlink": sendlink });
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

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthetripadvisorapplicationfeatureslegacyiomdfeaturestripadvisorpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTripadvisorApplicationFeaturesLegacyIomdFeaturesTripAdvisorPage();
