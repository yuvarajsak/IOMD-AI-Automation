import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheSvbconnectApplicationFeaturesLegacyIomdFeaturesSvbConnectPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheSvbconnectApplicationFeaturesLegacyIomdFeaturesSvbConnectPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
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

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksPasswordButtonByStatictextWithIndexInTheWebsite(password: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Password>\" button by StaticText with \"<Index>\" in the Website", { "password": password, "index": index });
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userClicksRegisternowButtonByOnlyStaictextInTheWebsite(registernow: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Registernow>\" button by only Staictext in the Website", { "registernow": registernow });
  }

  async userClicksRegisterButtonByOnlyNameInTheWebsite(register: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Register>\" button by only name in the Website", { "register": register });
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userClicksNextButtonByNameWithIndexInTheWebsite(next: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Next>\" button by name with \"<index>\" in the Website", { "next": next, "index": index });
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

  async userVerifiesCheckoutFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Checkout from interaction tab", {});
  }

  async userClicksPurchaseButtonByOnlyStaictextInTheWebsite(purchase: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<purchase>\" button by only Staictext in the Website", { "purchase": purchase });
  }

  async userVerifiesTheRecentRecordUnderPurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the recent record under purchase tab", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthesvbconnectapplicationfeatureslegacyiomdfeaturessvbconnectpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheSvbconnectApplicationFeaturesLegacyIomdFeaturesSvbConnectPage();
