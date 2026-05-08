import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTdAmeritradeApplicationFeaturesLegacyIomdFeaturesTdAmeritradePage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTdAmeritradeApplicationFeaturesLegacyIomdFeaturesTdAmeritradePage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksLoginButtonByNameWithIndexInTheWebsite(login: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Login>\" button by name with \"<index>\" in the Website", { "login": login, "index": index });
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

  async userClicksForgotpasswordButtonByOnlyStaictextInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<forgotPassword>\" button by only Staictext in the Website", { "forgotpassword": forgotpassword });
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userClicksCloseButtonByOnlyNameInTheWebsite(close: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Close>\" button by only name in the Website", { "close": close });
  }

  async userClicksSelectaccButtonByOnlyNameInTheWebsite(selectacc: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<selectAcc>\" button by only name in the Website", { "selectacc": selectacc });
  }

  async userClicksAcctypeButtonByOnlyNameInTheWebsite(acctype: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<accType>\" button by only name in the Website", { "acctype": acctype });
  }

  async userClicksOpenaccButtonByOnlyNameInTheWebsite(openacc: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<openAcc>\" button by only name in the Website", { "openacc": openacc });
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber are filled as expected for the Website", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthetdameritradeapplicationfeatureslegacyiomdfeaturestdameritradepage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTdAmeritradeApplicationFeaturesLegacyIomdFeaturesTdAmeritradePage();
