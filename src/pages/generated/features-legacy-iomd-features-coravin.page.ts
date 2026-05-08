import { BasePage } from "../base.page";

export class I2i38ValidatesTheAutofillOperationInTheCoravinWebsiteAfterEnablingTheExtensionAndVerifiesTheTransactionViewFeaturesLegacyIomdFeaturesCoravinPage extends BasePage {
  constructor() {
    super("I2i38ValidatesTheAutofillOperationInTheCoravinWebsiteAfterEnablingTheExtensionAndVerifiesTheTransactionViewFeaturesLegacyIomdFeaturesCoravinPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksAcceptcookiesButtonByOnlyNameInTheWebsite(acceptcookies: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<acceptCookies>\" button by only name in the Website", { "acceptcookies": acceptcookies });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userSelectsTokenisedEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Email from Extension", {});
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userClicksSubmitbuttonButtonByOnlyNameInTheWebsite(submitbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<submitbutton>\" button by only name in the Website", { "submitbutton": submitbutton });
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

  async userClicksAccountbuttonButtonByNameWithIndexInTheWebsite(accountbutton: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<accountButton>\" button by name with \"<index>\" in the Website", { "accountbutton": accountbutton, "index": index });
  }

  async userClicksCreateAccountButton(): Promise<void> {
    await this.executeLegacyStep("user clicks create account button", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userEntersPasswordInTheForm(): Promise<void> {
    await this.executeLegacyStep("user enters password in the form", {});
  }

  async userClicksCreateButtonByOnlyNameInTheWebsite(create: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<create>\" button by only name in the Website", { "create": create });
  }

  async userClicksNotnowbtnButtonByOnlyNameInTheWebsite(notnowbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<NotNowBtn>\" button by only name in the Website", { "notnowbtn": notnowbtn });
  }

  async userVerifiesRegisterFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Register from interaction tab", {});
  }

  async userClicksBackbuttonButtonByOnlyNameInTheIomdTransactions(backbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<BackButton>\" button by only name in the IOMD Transactions", { "backbutton": backbutton });
  }

  async userClicksManageButtonByOnlyNameInTheIomdTransactions(manage: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Manage>\" button by only name in the IOMD Transactions", { "manage": manage });
  }

  async userClicksSavedcredentialsButtonByOnlyNameInTheIomdTransactions(savedcredentials: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SavedCredentials>\" button by only name in the IOMD Transactions", { "savedcredentials": savedcredentials });
  }

  async userVerifiesCredentialsSaved(): Promise<void> {
    await this.executeLegacyStep("user verifies Credentials saved", {});
  }

  async userVerifiesDeleteIcon(): Promise<void> {
    await this.executeLegacyStep("user verifies delete icon", {});
  }

  async userSelectsPersonalEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Email from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Email are filled as expected for the Website", {});
  }

  async userClicksForgetpasswordButtonByOnlyStaictextInTheWebsite(forgetpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<forgetPassword>\" button by only Staictext in the Website", { "forgetpassword": forgetpassword });
  }

  async userClicksSubmitbtnButtonByNameWithIndexInTheWebsite(submitbtn: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Submitbtn>\" button by name with \"<index>\" in the Website", { "submitbtn": submitbtn, "index": index });
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteProducturl(producturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<producturl>\"", { "producturl": producturl });
  }

  async userSelectsTheFirstProductInCoravinForCheckingOut(): Promise<void> {
    await this.executeLegacyStep("user selects the first product in coravin for checking out", {});
  }

  async userClicksOnTheContinueToCheckoutButtonInCheckoutPage(): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue to checkout button in checkout page", {});
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userClicksOnTheGetShippingOptionGetshippingoption(getshippingoption: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the get shipping option \"<GetShippingOption>\"", { "getshippingoption": getshippingoption });
  }

  async userClicksOnTheContinueToPaymentButtonContinuetopayment(continuetopayment: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue to payment button \"<continueToPayment>\"", { "continuetopayment": continuetopayment });
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userVerifiesTheAutoFillDetailsForCardNumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for card number are filled as expected for the Website", {});
  }

  async userClicksPlaceorderbtnButtonByOnlyNameInTheWebsite(placeorderbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<PlaceOrderbtn>\" button by only name in the Website", { "placeorderbtn": placeorderbtn });
  }

  async userVerifiesCheckoutFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Checkout from interaction tab", {});
  }

  async userClicksOnThePurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user clicks on the purchase tab", {});
  }

  async userVerifiesTheRecentRecordUnderPurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the recent record under purchase tab", {});
  }

  async userNavigatesToTheSafariApplication(): Promise<void> {
    await this.executeLegacyStep("user navigates to the safari application", {});
  }

  async userClicksOnTheCheckoutIconAndVerifiesTheProduct(): Promise<void> {
    await this.executeLegacyStep("user clicks on the checkout Icon and verifies the product", {});
  }

  async userClicksGuestcheckoutButtonByOnlyNameInTheWebsite(guestcheckout: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<guestcheckout>\" button by only name in the Website", { "guestcheckout": guestcheckout });
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userClicksForgetpasswordbuttonButtonByOnlyNameInTheWebsite(forgetpasswordbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<forgetPasswordButton>\" button by only name in the Website", { "forgetpasswordbutton": forgetpasswordbutton });
  }

  async userEntersEmailInTheForm(): Promise<void> {
    await this.executeLegacyStep("user enters email in the form", {});
  }

  async userClicksSubmitbtnButtonByOnlyNameInTheWebsite(submitbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Submitbtn>\" button by only name in the Website", { "submitbtn": submitbtn });
  }
}

export const i2i38validatestheautofilloperationinthecoravinwebsiteafterenablingtheextensionandverifiesthetransactionviewfeatureslegacyiomdfeaturescoravinpage = new I2i38ValidatesTheAutofillOperationInTheCoravinWebsiteAfterEnablingTheExtensionAndVerifiesTheTransactionViewFeaturesLegacyIomdFeaturesCoravinPage();
