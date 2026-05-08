import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesCommonTestcasesPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesCommonTestcasesPage");
  }

  async userValidatesTheHomescreenDataOfIomd(): Promise<void> {
    await this.executeLegacyStep("user validates the homescreen data of IOMD", {});
  }

  async userEntersTokenisedEmail(): Promise<void> {
    await this.executeLegacyStep("user enters tokenised Email", {});
  }

  async userClicksOnTheSaveTokenizedEmailButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the save tokenized email button", {});
  }

  async userValidatesTheDataAfterLoggingInWithTokenizedEmailOfIomd(): Promise<void> {
    await this.executeLegacyStep("user validates the data after logging in with tokenized email of IOMD", {});
  }

  async userClicksOnTheCheckYourMessageButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the check your message button", {});
  }

  async userValidatesTheEmailDataFromIomdSupport(): Promise<void> {
    await this.executeLegacyStep("user validates the Email data from IOMD support", {});
  }

  async userClicksOnTheShowMeTheMagicButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the show me the magic button", {});
  }

  async userVerifiesDataInTokenisedAndPersonalInfoPageOfIomd(): Promise<void> {
    await this.executeLegacyStep("user verifies data in Tokenised and Personal info page of IOMD", {});
  }

  async userFillsTokenisedFirstAndLastName(): Promise<void> {
    await this.executeLegacyStep("user fills tokenised First and Last name", {});
  }

  async userFillsTokenisedPersonalInformation(): Promise<void> {
    await this.executeLegacyStep("user fills tokenised personal information", {});
  }

  async userClicksOnTheSaveAndShowMeTheMagicButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the save and show me the magic button", {});
  }

  async userNavigatesToTheSettingsApplicationAndEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user navigates to the settings application and enables the extension", {});
  }

  async userNavigatesToTheSafariApplication(): Promise<void> {
    await this.executeLegacyStep("user navigates to the safari application", {});
  }

  async userSwitchesBackToTheIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user switches back to the IOMD application", {});
  }

  async userValidatesPersonalInformationInIomdHomepage(): Promise<void> {
    await this.executeLegacyStep("user validates personal information in IOMD Homepage", {});
  }

  async userValidatesTokenisedInformationInIomdHomepage(): Promise<void> {
    await this.executeLegacyStep("user validates tokenised information in IOMD Homepage", {});
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userCompletesOnboardingFlowWithValidation(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with validation", {});
  }

  async userValidatesEnableExtensionPage(): Promise<void> {
    await this.executeLegacyStep("user validates Enable extension page", {});
  }

  async userValidatesShowmemagicPage(): Promise<void> {
    await this.executeLegacyStep("user validates ShowMeMagic Page", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userLaunchesTheWebsiteProducturl(producturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<producturl>\"", { "producturl": producturl });
  }

  async userSelectsTheFirstProductInCoravinForCheckingOut(): Promise<void> {
    await this.executeLegacyStep("user selects the first product in coravin for checking out", {});
  }

  async userClicksAdddtocartbtnButtonByOnlyNameInTheWebsite(adddtocartbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<adddToCartBtn>\" button by only name in the Website", { "adddtocartbtn": adddtocartbtn });
  }

  async userClicksOnTheCheckoutIconAndVerifiesTheProduct(): Promise<void> {
    await this.executeLegacyStep("user clicks on the checkout Icon and verifies the product", {});
  }

  async userClicksOnTheContinueToCheckoutButtonInCheckoutPage(): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue to checkout button in checkout page", {});
  }

  async userClicksGuestcheckoutButtonByOnlyNameInTheWebsite(guestcheckout: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<guestcheckout>\" button by only name in the Website", { "guestcheckout": guestcheckout });
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

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForCountryAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for Country are filled as expected for the Website", {});
  }

  async userClicksOnTheGetShippingOptionGetshippingoption(getshippingoption: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the get shipping option \"<GetShippingOption>\"", { "getshippingoption": getshippingoption });
  }

  async userClicksOnTheContinueToPaymentButtonContinuetopayment(continuetopayment: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue to payment button \"<continueToPayment>\"", { "continuetopayment": continuetopayment });
  }

  async userFillsTheCardDetailsInCoravinWebsite(): Promise<void> {
    await this.executeLegacyStep("user Fills the card details in Coravin website", {});
  }

  async userClicksRevieworderbtnButtonByNameWithIndexInTheWebsite(revieworderbtn: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ReviewOrderbtn>\" button by name with \"<index>\" in the Website", { "revieworderbtn": revieworderbtn, "index": index });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userVerifiesAndClicksOnTheBusinessTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on the business tab", {});
  }

  async userClicksBusinessButtonByOnlyStaictextInTheWebsite(business: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<business>\" button by only Staictext in the Website", { "business": business });
  }

  async userVerifiesTheBusinessDetailPageForCoravin(): Promise<void> {
    await this.executeLegacyStep("user verifies the business detail page for coravin", {});
  }

  async userVerifiesAndClicksOnTheInteractionsTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on the Interactions tab", {});
  }

  async userVerifiesCheckoutFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Checkout from interaction tab", {});
  }

  async userClicksBusinessBusinessByOnlyNameInTheIomdTransactions(business: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<business>\" business by only name in the IOMD Transactions", { "business": business });
  }

  async userClicksIomdBackButton(): Promise<void> {
    await this.executeLegacyStep("user clicks IOMD back button", {});
  }

  async userVerifiesAndClicksOnPaymentFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on Payment from interaction tab", {});
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userCompletesOnboardingFlowWithCardDataAndValidation(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data and Validation", {});
  }

  async userSelectsTokenisedUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Username from Extension", {});
  }

  async userSelectsTokenisedAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Address from Extension", {});
  }

  async userSelectsTokenisedPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Phonenumber from Extension", {});
  }

  async userSelectsPersonalEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Email from Extension", {});
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedUsernameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Username are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised LastName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Zipcode are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Phonenumber are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Email are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalUsernameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Username are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalAddress1AreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Address1 are filled as expected for the website", {});
  }

  async userVerifiesTheAutoFillDetailsForCityAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for City are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForStateAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for State are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForCardNumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for card number are filled as expected for the Website", {});
  }

  async userEntersRandomEmailInEmailIdTextbox(): Promise<void> {
    await this.executeLegacyStep("user enters random email in Email Id textbox", {});
  }

  async userClicksButtonButtonByNameInTheWebsite(button: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<button>\" button by name in the Website", { "button": button });
  }

  async userClicksLinkLinkByValueInTheWebsite(link: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<link>\" link by value in the Website", { "link": link });
  }

  async userClicksButtonButtonByOnlyNameInTheWebsite(button: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<button>\" button by only name in the Website", { "button": button });
  }

  async userClicksButtonButtonByOnlyStaictextInTheWebsite(button: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<button>\" button by only Staictext in the Website", { "button": button });
  }

  async userClicksButtonButtonByStatictextWithIndexInTheWebsite(button: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<button>\" button by StaticText with \"<index>\" in the Website", { "button": button, "index": index });
  }

  async userClicksButtonButtonByNameWithIndexInTheWebsite(button: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<button>\" button by name with \"<index>\" in the Website", { "button": button, "index": index });
  }

  async userClicksAButtonBtnnameByTextNameInTheWebsite(btnname: string): Promise<void> {
    await this.executeLegacyStep("user clicks a button \"<btnName>\"by text name in the Website", { "btnname": btnname });
  }

  async userClicksNotnowButtonByOnlyNameInTheWebsite(notnow: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<notnow>\" button by only name in the Website", { "notnow": notnow });
  }

  async userAcceptsTheSaveCredentialPopupForAutologinInIomdProfile(): Promise<void> {
    await this.executeLegacyStep("user accepts the save credential popup for autologin in IOMD Profile", {});
  }

  async userAcceptsTheSaveSignupCredentialPopupForAutologinInIomdProfile(): Promise<void> {
    await this.executeLegacyStep("user accepts the save Signup credential popup for autologin in IOMD Profile", {});
  }

  async userHandlesSavePasswordPopupFromIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user handles Save Password Popup from IOMD Application", {});
  }

  async userAcceptsTheUpdatePopupForSavingCardsInIomdProfile(): Promise<void> {
    await this.executeLegacyStep("user accepts the update popup for saving cards in IOMD Profile", {});
  }

  async userAcceptsTheUpdatePopupForExistingCardsInIomdProfile(): Promise<void> {
    await this.executeLegacyStep("user accepts the update popup for existing cards in IOMD Profile", {});
  }

  async userVerifiesTheCardDetailsIsSavedInIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user verifies the card details is saved in IOMD Application", {});
  }

  async userClicksPurchaseButtonByOnlyStaictextInTheWebsite(purchase: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<purchase>\" button by only Staictext in the Website", { "purchase": purchase });
  }

  async userVerifiesTheRecentRecordUnderPurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the recent record under purchase tab", {});
  }

  async userVerifiesLoginFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Login from interaction tab", {});
  }

  async userVerifiesOthersFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Others from interaction tab", {});
  }

  async userVerifiesRegisterFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Register from interaction tab", {});
  }

  async userVerifiesPwdchangeFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies PwdChange from interaction tab", {});
  }

  async userVerifiesAndClicksOnTheMessageTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on the message tab", {});
  }

  async userClicksOnTheProfileTab(): Promise<void> {
    await this.executeLegacyStep("user clicks on the profile tab", {});
  }

  async userClicksOnTheSettingsTab(): Promise<void> {
    await this.executeLegacyStep("user clicks on the settings tab", {});
  }

  async userClicksOnTheHomeTab(): Promise<void> {
    await this.executeLegacyStep("user clicks on the home tab", {});
  }

  async userSwitchesToIomdAdminApplicationAndDeleteTheCreatedTokenisedData(): Promise<void> {
    await this.executeLegacyStep("user switches to IOMD Admin application and delete the created tokenised data", {});
  }

  async userClicksShowdetailsButtonByOnlyNameInTheWebsite(showdetails: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<showdetails>\" button by only name in the Website", { "showdetails": showdetails });
  }

  async userClicksVisitthiswebsiteButtonByOnlyNameInTheWebsite(visitthiswebsite: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<visitthiswebsite>\" button by only name in the Website", { "visitthiswebsite": visitthiswebsite });
  }

  async userClicksVisitwebsiteButtonByOnlyNameInTheWebsite(visitwebsite: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<VisitWebsite>\" button by only name in the Website", { "visitwebsite": visitwebsite });
  }

  async userClicksNodeButtonForPaymentInWoocommerceSite(): Promise<void> {
    await this.executeLegacyStep("user clicks Node button for payment in Woocommerce site", {});
  }

  async userClicksNodeButtonForPaymentInShopifySite(): Promise<void> {
    await this.executeLegacyStep("user clicks Node button for payment in Shopify site", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefivemarysapplicationfeatureslegacyiomdfeaturescommontestcasespage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFivemarysApplicationFeaturesLegacyIomdFeaturesCommonTestcasesPage();
