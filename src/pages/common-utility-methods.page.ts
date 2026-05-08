import { BasePage } from "./base.page";
import { testData } from "../data/test-data";
import { selectorToString } from "../locators/selector-registry";
import { legacyAppLocators } from "../selectors/generated";
import { legacyJavaMethodBridge } from "../support/legacy-java-method-bridge";

export class CommonUtilityMethodsPage extends BasePage {
  constructor() {
    super("CommonUtilityMethodsPage");
  }

  private async withImplicitTimeout<T>(implicit: number, action: () => Promise<T>): Promise<T> {
    await browser.setTimeout({ implicit });
    try {
      return await action();
    } finally {
      await browser.setTimeout({ implicit: 10000 });
    }
  }

  private async clickIfVisible(selector: string): Promise<boolean> {
    return this.withImplicitTimeout(0, async () => {
      try {
        const elements = await $$(selector);
        for (const element of elements) {
          try {
            await element.click();
            return true;
          } catch {
            // Ignore stale/transient elements during optional prompt handling.
          }
        }
      } catch {
        return false;
      }
      return false;
    });
  }

  private async firstVisibleTextField(): Promise<WebdriverIO.Element> {
    const selectors = [
      `//XCUIElementTypeTextField[@value='e.g. your name']`,
      `//XCUIElementTypeTextField[contains(@value,'your name')]`,
      `//XCUIElementTypeTextField`,
      `//android.widget.EditText`
    ];

    for (const selector of selectors) {
      const elements = await $$(selector);
      for (const element of elements) {
        try {
          if (await element.isDisplayed()) {
            return element;
          }
        } catch {
          // Ignore transient UI elements and continue scanning.
        }
      }
    }

    throw new Error("No visible onboarding input field found.");
  }

  private async tapSelector(selector: string, timeout = 20000): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    await element.click();
  }

  private async typeSelector(selector: string, value: string, timeout = 20000): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    await element.setValue(value);
  }

  private selectorValue(key: keyof typeof legacyAppLocators): string {
    return selectorToString(legacyAppLocators[key]);
  }

  private randomTokenPrefix(): string {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let random = "";
    for (let index = 0; index < 6; index += 1) {
      random += characters[Math.floor(Math.random() * characters.length)];
    }
    return `test_qa${random}`;
  }

  async waitForElement(ele: string): Promise<void> {
    const element = await $(ele);
    await element.waitForDisplayed({ timeout: 20000 });
  }

  async userEnterTheValueInTheInputBox(emailid: string): Promise<boolean> {
    const field = await this.firstVisibleTextField();
    await field.click();
    await field.clearValue();
    await field.setValue(emailid);
    await this.clickIfVisible(`//*[contains(@name,'Done')]`);
    return true;
  }

  async userEnterThePasswordAndDeleteData(emailid: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEnterThePasswordAndDeleteData", ["emailid"], [emailid]));
  }

  async userClicksAllowBtn(): Promise<boolean> {
    return this.clickIfVisible(`//*[@name="Allow" or @label="Allow"]`);
  }

  async userEnterTokenisedEmail(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEnterTokenisedEmail", [], []));
  }

  async userEntersEmailInOnboardingFlow(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEntersEmailInOnboardingFlow", [], []));
  }

  async userClicksOnTheFetchButton(): Promise<boolean> {
    await this.tapSelector(`//XCUIElementTypeButton[contains(@name,'Create')]`);
    return true;
  }

  async userSelectsTheAddressFromTheExtension(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsTheAddressFromTheExtension", [], []));
  }

  async userSelectsTheOtherAddressFromTheExtension(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsTheOtherAddressFromTheExtension", [], []));
  }

  async userSelectsPhoneNumberFromTheExtension(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsPhoneNumberFromTheExtension", [], []));
  }

  async userSelectsAnonymousName(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsAnonymousName", [], []));
  }

  async userSelectsUserName(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsUserName", [], []));
  }

  async userSelectsAnonymousMailId(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsAnonymousMailId", [], []));
  }

  async userEnablesTheExtension(): Promise<boolean> {
    await this.userClicksAllowBtn();
    await this.clickIfVisible(`//*[@name="Next" or @label="Next"]`);
    await this.clickIfVisible(`//*[@name="DO IT LATER" or @label="DO IT LATER"]`);
    await this.clickIfVisible(this.selectorValue("showmemagicbtn"));
    await this.clickIfVisible(this.selectorValue("okgotitbtn"));
    return true;
  }

  async userClicksFillButton(): Promise<boolean> {
    const selectors = [
      `//*[@name='Fill' or @label='Fill']`,
      `//*[@name='FILL' or @label='FILL']`,
      `//*[contains(@name,'Fill') or contains(@label,'Fill')]`
    ];

    for (const selector of selectors) {
      if (await this.clickIfVisible(selector)) {
        return true;
      }
    }

    throw new Error("Fill button not found.");
  }

  async ClickAndValidateSavedCardPopup(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "ClickAndValidateSavedCardPopup", [], []));
  }

  async ClicksOKBtninPopup(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "ClicksOKBtninPopup", [], []));
  }

  async ClickAndUpdateCardPopup(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "ClickAndUpdateCardPopup", [], []));
  }

  async ClickAndValidateSavedCredentialsPopup(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "ClickAndValidateSavedCredentialsPopup", [], []));
  }

  async ClickAndValidateSaveSignupCredentialsPopup(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "ClickAndValidateSaveSignupCredentialsPopup", [], []));
  }

  async userValidatesTheSavedCardDetails(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesTheSavedCardDetails", [], []));
  }

  async ClickAndValidateSavePasswordPopup(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "ClickAndValidateSavePasswordPopup", [], []));
  }

  async userValidatesAndClicksOnTheInteractionsTab(): Promise<boolean> {
    await this.tapSelector(this.selectorValue("interactiontab"));
    return true;
  }

  async userValidatesAndClicksOnTheProfileTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheProfileTab", [], []));
  }

  async userValidatesAndClicksOnTheSettingsTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheSettingsTab", [], []));
  }

  async userValidatesAndClicksOnTheHomeTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheHomeTab", [], []));
  }

  async userValidatesAndClicksOnTheLoginFromInteractionTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheLoginFromInteractionTab", [], []));
  }

  async userValidatesAndClicksOnThePwdChangeFromInteractionTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnThePwdChangeFromInteractionTab", [], []));
  }

  async userValidatesAndClicksOnTheOthersFromInteractionTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheOthersFromInteractionTab", [], []));
  }

  async userValidatesAndClicksOnTheRegisterFromInteractionTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheRegisterFromInteractionTab", [], []));
  }

  async userValidatesAndClicksOnTheCheckoutFromInteractionTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheCheckoutFromInteractionTab", [], []));
  }

  async userValidatesAndClicksOnTheLoginGuestFromInteractionTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheLoginGuestFromInteractionTab", [], []));
  }

  async userValidatesAndClicksOnThePaymentFromInteractionTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnThePaymentFromInteractionTab", [], []));
  }

  async userValidatesAndClicksOnThePurchaseTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnThePurchaseTab", [], []));
  }

  async userValidatesAndClicksOnTheBusinessTab(): Promise<boolean> {
    await this.tapSelector(this.selectorValue("businesstab"));
    return true;
  }

  async userValidatesAndClicksOnTheMessagesTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesAndClicksOnTheMessagesTab", [], []));
  }

  async userClicksBusinessWithOnlyNameAndStaticText(business: string): Promise<boolean> {
    const selector = `//*[@name=${JSON.stringify(business)} or @label=${JSON.stringify(business)} or contains(@name, ${JSON.stringify(business)}) or contains(@label, ${JSON.stringify(business)})]`;
    await this.tapSelector(selector);
    return true;
  }

  async userVerifiesCreds(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesCreds", [], []));
  }

  async userVerifiesEyeIcon(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesEyeIcon", [], []));
  }

  async userVerifiesDeleteIcon(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesDeleteIcon", [], []));
  }

  async userClicksThebuisnessAndVerifiesTheEmailDetailsPresentInside(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksThebuisnessAndVerifiesTheEmailDetailsPresentInside", [], []));
  }

  async userClicksThebuisnessAndVerifiesThePhoneDetailsPresentInside(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksThebuisnessAndVerifiesThePhoneDetailsPresentInside", [], []));
  }

  async userValidatesHomePageData(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesHomePageData", [], []));
  }

  async userValidatesFirstScreenInOnboarding(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesFirstScreenInOnboarding", [], []));
  }

  async userNavigatesFirstScreenInOnboarding(): Promise<boolean> {
    await driver.launchApp();
    await this.userClicksAllowBtn();

    if (await this.clickIfVisible(`//XCUIElementTypeButton[contains(@name,'Continue')]`)) {
      const onboardingField = await this.firstVisibleTextField();
      await onboardingField.click();
      await onboardingField.clearValue();
      await onboardingField.setValue(this.randomTokenPrefix());
      await this.clickIfVisible(`//*[contains(@name,'Done')]`);
      await browser.pause(5000);
      await this.userClicksOnTheFetchButton();
      await this.tapSelector(`//XCUIElementTypeStaticText[contains(@name,'You are all set')]`);
      return true;
    }

    await this.userEnablesTheExtension();
    return true;
  }

  async userCreatesTokenisedEmail(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userCreatesTokenisedEmail", [], []));
  }

  async userEnablesExtension(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEnablesExtension", [], []));
  }

  async userContinuesFirstScreenInOnboarding(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userContinuesFirstScreenInOnboarding", [], []));
  }

  async userClicksOpenBtn(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksOpenBtn", [], []));
  }

  async userValidatesOnSuccessfullLoginWithTokenizedEmail(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesOnSuccessfullLoginWithTokenizedEmail", [], []));
  }

  async userValidatesDatainTokenisedAndPersonalInfoPage(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesDatainTokenisedAndPersonalInfoPage", [], []));
  }

  async userValidatesWelcomeEmailData(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesWelcomeEmailData", [], []));
  }

  async userValidatesTokenPesonalInfoPage(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesTokenPesonalInfoPage", [], []));
  }

  async userValidatesEnableExtensionPage(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesEnableExtensionPage", [], []));
  }

  async userClicksEnableExtension(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksEnableExtension", [], []));
  }

  async userValidatesShowMeMagicPage(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userValidatesShowMeMagicPage", [], []));
  }

  async userClicksBeginButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksBeginButton", [], []));
  }

  async userClicksSaveAndShowMeMagicButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksSaveAndShowMeMagicButton", [], []));
  }

  async userClicksCheckYourMessageButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksCheckYourMessageButton", [], []));
  }

  async userClicksShowMeMagicButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksShowMeMagicButton", [], []));
  }

  async userClicksOkGotItButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksOkGotItButton", [], []));
  }

  async userClicksIOMDBackButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksIOMDBackButton", [], []));
  }

  async userEntersTokenisedFirstAndLastname(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEntersTokenisedFirstAndLastname", [], []));
  }

  async userEntersPersonalisedData(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEntersPersonalisedData", [], []));
  }

  async userEntersPersonalisedDataWithInvalidAddress(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEntersPersonalisedDataWithInvalidAddress", [], []));
  }

  async userVerifiesPersonalDataInIOMD(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesPersonalDataInIOMD", [], []));
  }

  async userVerifiesTokenisedDataInIOMD(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTokenisedDataInIOMD", [], []));
  }

  async userEntersRandomEmaildetailsInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEntersRandomEmaildetailsInTheWebsite", [], []));
  }

  async userEntersValidEmaildetailsForNyTimes(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEntersValidEmaildetailsForNyTimes", [], []));
  }

  async userVerifiesTheEmaildetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheEmaildetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheFirstNamedetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheFirstNamedetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheLastNamedetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheLastNamedetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheAnonymousPhoneNumberdetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheAnonymousPhoneNumberdetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheAnonymousPhoneNumberdetailsWithFormatInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheAnonymousPhoneNumberdetailsWithFormatInTheWebsite", [], []));
  }

  async userVerifiesTheOtherPhoneNumberdetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheOtherPhoneNumberdetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheCountrydetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheCountrydetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheCitydetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheCitydetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheStatedetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheStatedetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheZipCodedetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheZipCodedetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userLaunchesUrl(url: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userLaunchesUrl", ["url"], [url]));
  }

  async userClicksButtonByName(btnName: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksButtonByName", ["btnName"], [btnName]));
  }

  async userClicksButtonByOnlyStaticText(btnName: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksButtonByOnlyStaticText", ["btnName"], [btnName]));
  }

  async userClicksButtonByOnlyName(btnName: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksButtonByOnlyName", ["btnName"], [btnName]));
  }

  async userClicksButtonByOnlyStaticTextAndIndex(btnName: string, index: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksButtonByOnlyStaticTextAndIndex", ["btnName", "index"], [btnName, index]));
  }

  async userClicksButtonByNameAndIndex(btnName: string, index: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksButtonByNameAndIndex", ["btnName", "index"], [btnName, index]));
  }

  async userClicksContinuebtnin_nytimes(btnName: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksContinuebtnin_nytimes", ["btnName"], [btnName]));
  }

  async userClicksButtonByValue(linkName: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksButtonByValue", ["linkName"], [linkName]));
  }

  async userRefreshThePage(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userRefreshThePage", [], []));
  }

  async userClicksButtonByOnlyVisibleText(btnName: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userClicksButtonByOnlyVisibleText", ["btnName"], [btnName]));
  }

  async userVerifiesRecentRecordInPurchaseColumn(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesRecentRecordInPurchaseColumn", [], []));
  }

  async userclicksNodeButtonInWoo(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userclicksNodeButtonInWoo", [], []));
  }

  async userclicksNodeButtonInShopify(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userclicksNodeButtonInShopify", [], []));
  }

  async userclicksNodeButtonInShopifyFromCartPage(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userclicksNodeButtonInShopifyFromCartPage", [], []));
  }

  async userSelectsTokenisedMailId(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsTokenisedMailId", [], []));
  }

  async userSelectsTokenisedUserName(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsTokenisedUserName", [], []));
  }

  async userSelectsTokenisedAddress(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsTokenisedAddress", [], []));
  }

  async userSelectsTokenisedPhoneNumber(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsTokenisedPhoneNumber", [], []));
  }

  async userSelectsPersonalMailId(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsPersonalMailId", [], []));
  }

  async userSelectsPersonalUserName(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsPersonalUserName", [], []));
  }

  async userSelectsPersonalAddress(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsPersonalAddress", [], []));
  }

  async userSelectsPersonalPhoneNumber(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsPersonalPhoneNumber", [], []));
  }

  async userVerifiesTheTokenisedEmaildetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheTokenisedEmaildetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheTokenisedPhoneNumberdetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheTokenisedPhoneNumberdetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheTokenisedPhoneNumberWithFormatIsDisplayedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheTokenisedPhoneNumberWithFormatIsDisplayedInTheWebsite", [], []));
  }

  async userVerifiesTheTokenisedZipCodeAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheTokenisedZipCodeAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheTokenisedUserNameIsDisplayedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheTokenisedUserNameIsDisplayedInTheWebsite", [], []));
  }

  async userVerifiesTheTokenisedFirstNameIsDisplayedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheTokenisedFirstNameIsDisplayedInTheWebsite", [], []));
  }

  async userVerifiesTheTokenisedLastNameIsDisplayedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheTokenisedLastNameIsDisplayedInTheWebsite", [], []));
  }

  async userVerifiesThePersonalEmaildetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesThePersonalEmaildetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesThePersonalPhoneNumberdetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesThePersonalPhoneNumberdetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesTheCardNumberdetailsAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesTheCardNumberdetailsAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userSelectsCardDetails(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userSelectsCardDetails", [], []));
  }

  async userVerifiesThePersonalPhoneNumberWithFormatIsDisplayedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesThePersonalPhoneNumberWithFormatIsDisplayedInTheWebsite", [], []));
  }

  async userVerifiesThePersonalZipCodeAreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesThePersonalZipCodeAreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesThePersonalAddrress1AreGettingAsExpectedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesThePersonalAddrress1AreGettingAsExpectedInTheWebsite", [], []));
  }

  async userVerifiesThePersonalUserNameIsDisplayedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesThePersonalUserNameIsDisplayedInTheWebsite", [], []));
  }

  async userVerifiesThePersonalFirstNameIsDisplayedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesThePersonalFirstNameIsDisplayedInTheWebsite", [], []));
  }

  async userVerifiesThePersonalLastNameIsDisplayedInTheWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userVerifiesThePersonalLastNameIsDisplayedInTheWebsite", [], []));
  }

  async userAddCardDetails(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userAddCardDetails", [], []));
  }

  async clickDoneIfPresent(): Promise<void> {
    await legacyJavaMethodBridge.execute("commonUtilityMethods", "clickDoneIfPresent", [], []);
  }

  async userAddAddressDetails(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userAddAddressDetails", [], []));
  }

  async userAddCardDetailsWithValidation(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userAddCardDetailsWithValidation", [], []));
  }

  async userEntersPasswordInCoravinWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEntersPasswordInCoravinWebsite", [], []));
  }

  async userEntersEmailInCoravinWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("commonUtilityMethods", "userEntersEmailInCoravinWebsite", [], []));
  }

  async enterStorePassword(): Promise<boolean> {
    await this.typeSelector(`//XCUIElementTypeSecureTextField[@name='Enter store password']`, "nodeC0nnect");
    await this.tapSelector(`//XCUIElementTypeButton[@name='Enter']`);
    await browser.pause(5000);
    return true;
  }

  async enableNodeExtension(): Promise<boolean> {
    await this.tapSelector(`~PageFormatMenuButton`);
    await this.tapSelector(`//XCUIElementTypeCell[@name='ManageExtensions']`);
    const nodeToggle = await $(`//XCUIElementTypeSwitch[@name='node.']`);
    await nodeToggle.waitForDisplayed({ timeout: 20000 });
    if ((await nodeToggle.getAttribute("value")) === "0") {
      await nodeToggle.click();
    }
    await this.tapSelector(`~Done`);
    await driver.execute("mobile: tap", { x: 200, y: 200 });
    return true;
  }

  async selectProductAndCheckout(): Promise<boolean> {
    await driver.execute("mobile: swipe", { direction: "up" });
    await this.tapSelector(`//XCUIElementTypeOther[contains(@name,'Snowboard')]`);
    await this.tapSelector(`//*[@name='Add to cart' or @label='Add to cart']`);
    await this.tapSelector(`//*[@name='Check out' or @label='Check out' or @name='CHECK OUT']`);
    return true;
  }

  async enterCheckoutDetails(): Promise<boolean> {
    const email = `qa_test${Date.now()}@mail.com`;
    const firstNames = ["John", "Michael", "David", "Chris", "Daniel"];
    const lastNames = ["Smith", "Brown", "Taylor", "Wilson", "Clark"];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    await this.typeSelector(`//XCUIElementTypeTextField[@name='Email or mobile phone number']`, email);
    await this.typeSelector(`//XCUIElementTypeTextField[@name='First name']`, firstName);
    await this.typeSelector(`//XCUIElementTypeTextField[@name='Last name']`, lastName);
    await this.typeSelector(`//XCUIElementTypeTextField[@name='Address']`, "B");
    await browser.pause(2000);
    await this.tapSelector(`//XCUIElementTypeButton[contains(@name,'228 Hamilton Avenue')]`);
    await this.typeSelector(`//XCUIElementTypeTextField[@name='City']`, "Palo Alto");
    await this.typeSelector(`//XCUIElementTypeTextField[@name='ZIP code']`, "94301");
    await this.typeSelector(`//XCUIElementTypeTextField[@name='Phone']`, "6505551212");
    await this.tapSelector(`//*[@name='Continue to shipping' or @label='Continue to shipping']`);
    await browser.pause(3000);
    await this.tapSelector(`//*[@name='Continue to payment' or @label='Continue to payment']`);
    await browser.pause(3000);
    return true;
  }

  async enterCardDetails(): Promise<boolean> {
    await this.typeSelector(`//XCUIElementTypeTextField[@name='Card number']`, testData.anonymousCardNo);
    await this.typeSelector(`//XCUIElementTypeTextField[@name='Name on card']`, testData.anonymousCardName);
    await this.typeSelector(`//XCUIElementTypeTextField[@name='Expiration date (MM / YY)']`, "12/30");
    await this.typeSelector(`//XCUIElementTypeTextField[@name='Security code']`, testData.anonymousCvv);
    return true;
  }

  async clickPayNow(): Promise<boolean> {
    await this.tapSelector(`//*[@name='Pay now' or @label='Pay now']`);
    await browser.pause(10000);
    return true;
  }

  async clickTrackMyOrderButton(): Promise<boolean> {
    await this.tapSelector(`//*[@name='Track My Order' or @label='Track My Order']`);
    await browser.pause(5000);
    return true;
  }

  async clickBusinessAndBuyAgain(): Promise<boolean> {
    await this.userValidatesAndClicksOnTheBusinessTab();
    await this.tapSelector(`//*[@name='NodeBold' or @label='NodeBold']`);
    await this.tapSelector(`//*[@name='Buy Again' or @label='Buy Again']`);
    return true;
  }
}

export const commonUtilityMethodsPage = new CommonUtilityMethodsPage();
