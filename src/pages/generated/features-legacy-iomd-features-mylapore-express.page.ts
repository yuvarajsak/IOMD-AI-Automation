import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesMylaporeExpressPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesMylaporeExpressPage");
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userScrollDownToZipCodeFieldAndEntersValue(): Promise<void> {
    await this.executeLegacyStep("user scroll down to Zip code field and enters value", {});
  }

  async userSelectsDayAndSelectsTheFirstCustomOption(): Promise<void> {
    await this.executeLegacyStep("user selects day and selects the first custom option", {});
  }

  async userClicksAddToCartButtonInMylaporeexpress(): Promise<void> {
    await this.executeLegacyStep("user clicks Add To Cart button in MylaporeExpress", {});
  }

  async userClicksContinuebtnButtonByOnlyNameInTheWebsite(continuebtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ContinueBtn>\" button by only name in the Website", { "continuebtn": continuebtn });
  }

  async userSelectsTokenisedEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Email from Extension", {});
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForCountryAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for Country are filled as expected for the Website", {});
  }

  async userEntersPhonenumberForMylaporeExpress(): Promise<void> {
    await this.executeLegacyStep("user enters Phonenumber for Mylapore Express", {});
  }

  async userClicksContinuetopaymentButtonByOnlyNameInTheWebsite(continuetopayment: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ContinuetoPayment>\" button by only name in the Website", { "continuetopayment": continuetopayment });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userVerifiesTheAutoFillDetailsForCardNumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for card number are filled as expected for the Website", {});
  }

  async userClicksPayButtonByNameWithIndexInTheWebsite(pay: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Pay>\" button by name with \"<index>\" in the Website", { "pay": pay, "index": index });
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

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userClicksOnTheMyaccountIconInTheMylaporeexpressWebsite(): Promise<void> {
    await this.executeLegacyStep("user clicks on the MyAccount icon in the MylaporeExpress website", {});
  }

  async userEntersPhonenumberForLoginInMylaporeExpress(): Promise<void> {
    await this.executeLegacyStep("user enters Phonenumber for Login In Mylapore Express", {});
  }

  async userClicksLoginButtonByOnlyNameInTheWebsite(login: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Login>\" button by only name in the Website", { "login": login });
  }

  async userVerifiesLoginGuestFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Login-Guest from interaction tab", {});
  }

  async userClicksSignupButtonInTheMylaporeexpressWebsite(): Promise<void> {
    await this.executeLegacyStep("user clicks Signup button in the MylaporeExpress website", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefivemarysapplicationfeatureslegacyiomdfeaturesmylaporeexpresspage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesMylaporeExpressPage();
