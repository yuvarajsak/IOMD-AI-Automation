import { BasePage } from "../base.page";

export class I2i36ValidatesTheAuofillOperationInTheHindustanTimesWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesNewYorkTimesPage extends BasePage {
  constructor() {
    super("I2i36ValidatesTheAuofillOperationInTheHindustanTimesWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesNewYorkTimesPage");
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userEntersValidEmailInNytimes(): Promise<void> {
    await this.executeLegacyStep("user enters valid email in Nytimes", {});
  }

  async userClicksOnTheContinueButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue button", {});
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userEntersPasswordInTheSignupPageOfNytimes(): Promise<void> {
    await this.executeLegacyStep("user enters password in the signup page of nytimes", {});
  }

  async userClicksCreateaccbuttonButtonByOnlyNameInTheWebsite(createaccbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<createaccbutton>\" button by only name in the Website", { "createaccbutton": createaccbutton });
  }

  async userClicksCardselectionButtonByOnlyStaictextInTheWebsite(cardselection: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<cardSelection>\" button by only Staictext in the Website", { "cardselection": cardselection });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userClicksContinueButtonByNameInNytimes(continueValue: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continue>\" button by name in nytimes", { "continueValue": continueValue });
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

  async userClicksPurchaseButtonByOnlyStaictextInTheWebsite(purchase: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<purchase>\" button by only Staictext in the Website", { "purchase": purchase });
  }

  async userVerifiesTheRecentRecordUnderPurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the recent record under purchase tab", {});
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userEntersRandomEmailInEmailIdTextbox(): Promise<void> {
    await this.executeLegacyStep("user enters random email in Email Id textbox", {});
  }

  async userVerifiesRegisterFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Register from interaction tab", {});
  }
}

export const i2i36validatestheauofilloperationinthehindustantimeswebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesnewyorktimespage = new I2i36ValidatesTheAuofillOperationInTheHindustanTimesWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesNewYorkTimesPage();
