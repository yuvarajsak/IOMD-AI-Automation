import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheEtsyApplicationFeaturesLegacyIomdFeaturesEtsyPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheEtsyApplicationFeaturesLegacyIomdFeaturesEtsyPage");
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

  async userEntersRandomEmailInEmailIdTextbox(): Promise<void> {
    await this.executeLegacyStep("user enters random email in Email Id textbox", {});
  }

  async userClicksContinueBtnButtonByOnlyNameInTheWebsite(continueBtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continue btn>\" button by only name in the Website", { "continueBtn": continueBtn });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userEntersPasswordInTheSignupPageOfEtsy(): Promise<void> {
    await this.executeLegacyStep("user enters password in the signup page of Etsy", {});
  }

  async userClicksCreateaccountButtonByNameWithIndexInTheWebsite(createaccount: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<createaccount>\" button by name with \"<index>\" in the Website", { "createaccount": createaccount, "index": index });
  }

  async userSwitchesBackToTheIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user switches back to the IOMD application", {});
  }

  async userClicksOnTheFetchButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the fetch button", {});
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

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheetsyapplicationfeatureslegacyiomdfeaturesetsypage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheEtsyApplicationFeaturesLegacyIomdFeaturesEtsyPage();
