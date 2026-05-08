import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheBookingApplicationFeaturesLegacyIomdFeaturesBookingcomPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheBookingApplicationFeaturesLegacyIomdFeaturesBookingcomPage");
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

  async userEntersRandomEmailInEmailIdTextboxForBookingWebsite(): Promise<void> {
    await this.executeLegacyStep("user enters random email in Email Id textbox for booking website", {});
  }

  async userClicksContinueBtnButtonByOnlyNameInTheWebsite(continueBtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continue btn>\" button by only name in the Website", { "continueBtn": continueBtn });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userFillsPasswordForBookingWebsite(): Promise<void> {
    await this.executeLegacyStep("user fills password for booking website", {});
  }

  async userClicksCreateaccbtnButtonByOnlyNameInTheWebsite(createaccbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<createaccbtn>\" button by only name in the Website", { "createaccbtn": createaccbtn });
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

  async userVerifiesRegisterFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Register from interaction tab", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthebookingapplicationfeatureslegacyiomdfeaturesbookingcompage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheBookingApplicationFeaturesLegacyIomdFeaturesBookingcomPage();
