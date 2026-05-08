import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAllstateApplicationFeaturesLegacyIomdFeaturesAllStatePage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAllstateApplicationFeaturesLegacyIomdFeaturesAllStatePage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksLoginButtonByNameWithIndexInTheWebsite(login: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<LogIn>\" button by name with \"<Index>\" in the Website", { "login": login, "index": index });
  }

  async userEntersDataInSigninPageForAllstateWebsite(): Promise<void> {
    await this.executeLegacyStep("user enters data in signin page for AllState website", {});
  }

  async userClicksLoginButtonByOnlyNameInTheWebsite(login: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<login>\" button by only name in the Website", { "login": login });
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
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheallstateapplicationfeatureslegacyiomdfeaturesallstatepage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAllstateApplicationFeaturesLegacyIomdFeaturesAllStatePage();
