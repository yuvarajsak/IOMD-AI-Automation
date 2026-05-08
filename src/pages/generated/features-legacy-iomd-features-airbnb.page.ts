import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAirbnbApplicationFeaturesLegacyIomdFeaturesAirbnbPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAirbnbApplicationFeaturesLegacyIomdFeaturesAirbnbPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksContinueemailbtnButtonByOnlyNameInTheWebsite(continueemailbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continueEmailbtn>\" button by only name in the Website", { "continueemailbtn": continueemailbtn });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userEntersRandomEmailInEmailIdTextboxForAirbnbWebsite(): Promise<void> {
    await this.executeLegacyStep("user enters random email in Email Id textbox for airbnb website", {});
  }

  async userClicksContinueButtonByOnlyNameInTheWebsite(continueValue: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continue>\" button by only name in the Website", { "continueValue": continueValue });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userClicksAgreeButtonByOnlyNameInTheWebsite(agree: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<agree>\" button by only name in the Website", { "agree": agree });
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
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairbnbapplicationfeatureslegacyiomdfeaturesairbnbpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAirbnbApplicationFeaturesLegacyIomdFeaturesAirbnbPage();
