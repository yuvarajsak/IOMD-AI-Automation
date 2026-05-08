import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheMyelementorApplicationFeaturesLegacyIomdFeaturesMyElementorPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheMyelementorApplicationFeaturesLegacyIomdFeaturesMyElementorPage");
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

  async userClicksResetbtnButtonByOnlyNameInTheWebsite(resetbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<resetbtn>\" button by only name in the Website", { "resetbtn": resetbtn });
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

  async userEntersDataInSignupPageForElementorWebsite(): Promise<void> {
    await this.executeLegacyStep("user enters data in signup page for elementor website", {});
  }

  async userClicksCreatebtnButtonByOnlyNameInTheWebsite(createbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<createbtn>\" button by only name in the Website", { "createbtn": createbtn });
  }

  async userVerifiesRegisterFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Register from interaction tab", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthemyelementorapplicationfeatureslegacyiomdfeaturesmyelementorpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheMyelementorApplicationFeaturesLegacyIomdFeaturesMyElementorPage();
