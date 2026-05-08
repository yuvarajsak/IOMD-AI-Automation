import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFidelityApplicationFeaturesLegacyIomdFeaturesFidelityPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFidelityApplicationFeaturesLegacyIomdFeaturesFidelityPage");
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

  async userClicksRegisterButtonByOnlyStaictextInTheWebsite(register: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Register>\" button by only Staictext in the Website", { "register": register });
  }

  async userSelectsUserNameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects User name from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for LastName are filled as expected for the Website", {});
  }

  async userClicksAcceptButtonByOnlyNameInTheWebsite(accept: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<accept>\" button by only name in the Website", { "accept": accept });
  }

  async userClicksLoginButtonByOnlyStaictextInTheWebsite(login: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Login>\" button by only Staictext in the Website", { "login": login });
  }

  async userClicksForgotusernameButtonByOnlyStaictextInTheWebsite(forgotusername: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<forgotUsername>\" button by only Staictext in the Website", { "forgotusername": forgotusername });
  }

  async userClicksOpenaccButtonByNameWithOindexInTheWebsite(openacc: string, oindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<openAcc>\" button by name with \"<oindex>\" in the Website", { "openacc": openacc, "oindex": oindex });
  }

  async userClicksRolloveraccButtonByNameWithOindexInTheWebsite(rolloveracc: string, oindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<rolloverAcc>\" button by name with \"<oindex>\" in the Website", { "rolloveracc": rolloveracc, "oindex": oindex });
  }

  async userClicksNoButtonByOnlyStaictextInTheWebsite(no: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<No>\" button by only Staictext in the Website", { "no": no });
  }

  async userClicksNextButtonByOnlyNameInTheWebsite(next: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Next>\" button by only name in the Website", { "next": next });
  }

  async userSelectsAnonymousEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects Anonymous Email from Extension", {});
  }

  async userSelectsPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects Phonenumber from Extension", {});
  }

  async userSelectOtherAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user select Other Address from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for Email are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for ZipCode are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPhonenumberWithFormatInTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for PhoneNumber with format in the Website", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFidelityApplicationFeaturesLegacyIomdFeaturesFidelityPage();
