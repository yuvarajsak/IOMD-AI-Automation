import { BasePage } from "../base.page";

export class I2iHiValidatesTheAuofillOperationInTheHindustanTimesWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesHindhusthanTimesPage extends BasePage {
  constructor() {
    super("I2iHiValidatesTheAuofillOperationInTheHindustanTimesWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesHindhusthanTimesPage");
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

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userClicksSubscribebtnButtonByOnlyStaictextInTheWebsite(subscribebtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<subscribebtn>\" button by only Staictext in the Website", { "subscribebtn": subscribebtn });
  }
}

export const i2ihivalidatestheauofilloperationinthehindustantimeswebsiteafterenablingtheextensionfeatureslegacyiomdfeatureshindhusthantimespage = new I2iHiValidatesTheAuofillOperationInTheHindustanTimesWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesHindhusthanTimesPage();
