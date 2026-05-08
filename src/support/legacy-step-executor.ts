import { env } from "../config/env";
import { testData } from "../data/test-data";
import { selectorToString } from "../locators/selector-registry";
import { legacyAppLocators, legacySafariLocators, legacyWebLocators } from "../selectors/generated";

type StepHandler = {
  pattern: RegExp;
  run: (match: RegExpMatchArray, parameters: Record<string, string>) => Promise<void>;
};

const firstValue = (parameters: Record<string, string>): string => Object.values(parameters)[0] ?? "";

const allValues = (parameters: Record<string, string>): string[] => Object.values(parameters);

const ios = (): boolean => String(driver.capabilities.platformName ?? "").toLowerCase() === "ios";

const withImplicitTimeout = async <T>(implicit: number, action: () => Promise<T>): Promise<T> => {
  await browser.setTimeout({ implicit });
  try {
    return await action();
  } finally {
    await browser.setTimeout({ implicit: 10000 });
  }
};

const visible = async (selector: string): Promise<boolean> => {
  const elements = await $$(selector);
  if ((await elements.length) === 0) {
    return false;
  }
  return elements[0].isDisplayed();
};

const clickIfVisible = async (selector: string): Promise<boolean> => {
  return withImplicitTimeout(0, async () => {
    try {
      const elements = await $$(selector);
      if ((await elements.length) === 0) {
        return false;
      }

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
};

const tapSelector = async (selector: string): Promise<void> => {
  const element = await $(selector);
  await element.waitForDisplayed({ timeout: 20000 });
  await element.click();
};

const checkpoint = async (name: string): Promise<void> => {
  console.log(`[checkpoint] ${name}`);
};

const typeSelector = async (selector: string, value: string): Promise<void> => {
  const element = await $(selector);
  await element.waitForDisplayed({ timeout: 20000 });
  await element.setValue(value);
};

const pause = async (ms: number): Promise<void> => {
  await browser.pause(ms);
};

const randomTokenPrefix = (): string => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let random = "";
  for (let index = 0; index < 6; index += 1) {
    random += characters[Math.floor(Math.random() * characters.length)];
  }
  return `test_qa${random}`;
};

const typeFirstVisible = async (selectors: string[], value: string): Promise<boolean> => {
  for (const selector of selectors) {
    const elements = await $$(selector);
    if ((await elements.length) > 0) {
      await elements[0].setValue(value);
      return true;
    }
  }
  return false;
};

const fillVisibleFields = async (values: string[]): Promise<void> => {
  const textFields = await $$("//XCUIElementTypeTextField | //XCUIElementTypeSecureTextField | //android.widget.EditText");
  const count = await textFields.length;
  if (count === 0) {
    throw new Error("No visible input fields found to fill.");
  }

  for (let index = 0; index < Math.min(values.length, count); index += 1) {
    await textFields[index].setValue(values[index]);
  }
};

const firstVisibleElement = async (selectors: string[]): Promise<WebdriverIO.Element> => {
  for (const selector of selectors) {
    const elements = await $$(selector);
    if ((await elements.length) > 0) {
      for (const element of elements) {
        try {
          if (await element.isDisplayed()) {
            return element;
          }
        } catch {
          // ignore stale/transient elements and keep scanning
        }
      }
    }
  }
  throw new Error(`Unable to find a visible element for selectors: ${selectors.join(" | ")}`);
};

const verifyTextPresent = async (text: string): Promise<void> => {
  const selector = ios()
    ? `//*[@name=${JSON.stringify(text)} or @label=${JSON.stringify(text)} or contains(@name, ${JSON.stringify(text)}) or contains(@label, ${JSON.stringify(text)})]`
    : `//*[@text=${JSON.stringify(text)} or @content-desc=${JSON.stringify(text)} or contains(@text, ${JSON.stringify(text)})]`;

  const elements = await $$(selector);
  if ((await elements.length) > 0) {
    await expect(elements[0]).toBeDisplayed();
    return;
  }

  const source = await driver.getPageSource();
  expect(source).toContain(text);
};

const clickByLabel = async (label: string): Promise<void> => {
  const selector = ios()
    ? `//*[@name=${JSON.stringify(label)} or @label=${JSON.stringify(label)} or contains(@name, ${JSON.stringify(label)}) or contains(@label, ${JSON.stringify(label)})]`
    : `//*[@text=${JSON.stringify(label)} or @content-desc=${JSON.stringify(label)} or contains(@text, ${JSON.stringify(label)})]`;
  await tapSelector(selector);
};

const clickByLabels = async (labels: string[]): Promise<boolean> => {
  for (const label of labels) {
    const selector = ios()
      ? `//*[@name=${JSON.stringify(label)} or @label=${JSON.stringify(label)} or contains(@name, ${JSON.stringify(label)}) or contains(@label, ${JSON.stringify(label)})]`
      : `//*[@text=${JSON.stringify(label)} or @content-desc=${JSON.stringify(label)} or contains(@text, ${JSON.stringify(label)})]`;
    if (await clickIfVisible(selector)) {
      return true;
    }
  }
  return false;
};

const requireClickByLabels = async (labels: string[], description: string): Promise<void> => {
  if (!(await clickByLabels(labels))) {
    throw new Error(`Unable to continue onboarding: ${description} was not visible.`);
  }
};

const completeGoogleSignInIfConfigured = async (): Promise<void> => {
  const email = process.env.GMAIL_TEST_EMAIL?.trim();
  const password = process.env.GMAIL_TEST_PASSWORD?.trim();

  if (!email || !password) {
    throw new Error(
      "Current onboarding requires Connect Gmail. Missing GMAIL_TEST_EMAIL/GMAIL_TEST_PASSWORD, so the real onboarding flow cannot be completed."
    );
  }

  const emailField = await firstVisibleElement([
    `//XCUIElementTypeTextField[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email')]`,
    `//XCUIElementTypeTextField`,
    `//XCUIElementTypeOther[contains(@name,'Email') or contains(@label,'Email')]`
  ]);
  await emailField.click();
  await emailField.setValue(email);
  await requireClickByLabels(["Next"], "Google email Next button");

  const passwordField = await firstVisibleElement([
    `//XCUIElementTypeSecureTextField[contains(@name,'password') or contains(@label,'password') or contains(@value,'password')]`,
    `//XCUIElementTypeSecureTextField`
  ]);
  await passwordField.click();
  await passwordField.setValue(password);
  await requireClickByLabels(["Next"], "Google password Next button");
  await clickByLabels(["Continue", "Allow"]);
};

const selectorValue = (key: keyof typeof legacyAppLocators | keyof typeof legacyWebLocators | keyof typeof legacySafariLocators): string => {
  const registry =
    key in legacyAppLocators ? legacyAppLocators : key in legacyWebLocators ? legacyWebLocators : legacySafariLocators;
  return selectorToString(registry[key as keyof typeof registry]);
};

const extensionDataMap: Record<string, string> = {
  "tokenised email": testData.tokenEmailId,
  "tokenised username": testData.tokenisedUserName,
  "tokenised address": testData.tokenisedAddress,
  "tokenised phonenumber": testData.tokenisedPhoneNumber,
  "personal email": testData.personalMailId,
  "personal username": testData.personalUserName,
  "personal address": testData.personalAddress,
  "personal phonenumber": testData.personalPhoneNumber,
  "anonymous email": testData.anonymousMailId,
  "anonymous name": "Rohan Anonomyous",
  "phonenumber": testData.anonymousPhoneNumber,
  "user name": testData.userName,
  "address": testData.anonymousAddress
};

const autofillExpectationMap: Record<string, string> = {
  "tokenised email": testData.tokenEmailId,
  "tokenised username": testData.tokenisedUserName,
  "tokenised zipcode": testData.tokenisedZipCode,
  "tokenised phonenumber": testData.tokenisedPhoneNumber,
  "tokenised phonenumber with format": testData.tokenisedPhWithFormat,
  "tokenised firstname": testData.tokenisedFirstName,
  "tokenised lastname": testData.tokenisedLastName,
  "personal email": testData.personalMailId,
  "personal username": testData.personalUserName,
  "personal zipcode": testData.personalZipCode,
  "personal phonenumber": testData.personalPhoneNumber,
  "personal phonenumber with format": testData.personalPhWithFormat,
  "personal firstname": testData.personalFirstName,
  "personal lastname": testData.personalLastName,
  "anonymous email": testData.anonymousMailId,
  "anonymous phonenumber": testData.anonymousPhoneNumber,
  "anonymous address": testData.anonymousAddress
};

const interactionMap: Record<string, string> = {
  login: selectorValue("logininteraction"),
  pwdchange: selectorValue("pwdinteraction"),
  others: selectorValue("othersinteraction"),
  register: selectorValue("registerinteraction"),
  checkout: selectorValue("checkoutinteraction"),
  payment: selectorValue("paymentinteraction"),
  "login-guest": selectorValue("guestlogininteraction")
};

const handlers: StepHandler[] = [
  {
    pattern: /^I initiate applitools eyes to proceed validation for ".*"$/i,
    run: async (_match, parameters) => {
      await checkpoint(`start visual validation: ${firstValue(parameters) || "onboarding"}`);
      await driver.launchApp();
    }
  },
  {
    pattern: /^user closes applitools eyes after validation$/i,
    run: async () => {
      await checkpoint("end visual validation");
    }
  },
  {
    pattern: /^user validates Allow popup screen on launching the application$/i,
    run: async () => {
      await checkpoint("Allow popup screen");
      await clickIfVisible(`//*[@name="Allow" or @label="Allow"]`);
    }
  },
  {
    pattern: /^user validates splash screen of the application$/i,
    run: async () => {
      await checkpoint("Splash screen");
      if (!(await clickIfVisible(`//XCUIElementTypeOther/XCUIElementTypeButton`))) {
        await clickByLabels(["Continue", "Next", "Get Started"]);
      }
    }
  },
  {
    pattern: /^user validates checkbox screen$/i,
    run: async () => {
      await checkpoint("Checkbox screen");
      let selectedLegacyCheckbox = false;
      for (let index = 1; index <= 3; index += 1) {
        selectedLegacyCheckbox = (await clickIfVisible(`(//XCUIElementTypeButton[@name='checkMark Unselected'])[${index}]`)) || selectedLegacyCheckbox;
      }

      if (selectedLegacyCheckbox) {
        await checkpoint("Checkbox selections complete");
        if (!(await clickByLabels(["Continue"]))) {
          throw new Error("Unable to continue from checkbox screen.");
        }
        return;
      }

      await checkpoint("Current Connect Gmail onboarding screen");
      await requireClickByLabels(["Connect Gmail"], "Connect Gmail button");
      await completeGoogleSignInIfConfigured();
    }
  },
  {
    pattern: /^user validates BeginSetup screen$/i,
    run: async () => {
      await checkpoint("Begin setup screen");
      if (await clickByLabels(["Begin setup", "Begin Setup"])) {
        return;
      }
      if (!(await clickByLabels(["Continue", "Next"]))) {
        throw new Error("Begin setup button was not visible.");
      }
    }
  },
  {
    pattern: /^user validates Setup step1 screen$/i,
    run: async () => {
      await checkpoint("Setup step 1 screen");
      const tokenField = await firstVisibleElement([
        `//XCUIElementTypeTextField[contains(@value, ${JSON.stringify(testData.tokenEmailName)})]`,
        selectorValue("emailvalue"),
        `//XCUIElementTypeTextField`,
        `//android.widget.EditText`
      ]);
      await tokenField.click();
      await tokenField.clearValue();
      await tokenField.setValue(testData.tokenEmailName);
      await clickIfVisible(`//*[contains(@name,'Done') or contains(@label,'Done')]`);
      await checkpoint("Tokenized email entered");
      if (!(await clickByLabels(["Create", "Begin"]))) {
        throw new Error("Unable to submit setup step 1.");
      }
      await pause(7000);
    }
  },
  {
    pattern: /^user validates tell your friends screen$/i,
    run: async () => {
      await checkpoint("Tell your friends screen");
      if (await clickByLabels(["TELL YOUR FRIENDS", "Tell your friends"])) {
        await checkpoint("Share sheet");
        await clickByLabels(["Close", "Cancel"]);
      }
    }
  },
  {
    pattern: /^user validates Setup step2 screen$/i,
    run: async () => {
      await checkpoint("Setup step 2 screen");
      if (await clickByLabels(["Enable Safari Browser Extension", "Enable Extension", "Continue"])) {
        return;
      }
      if (!(await clickByLabels(["Next"]))) {
        throw new Error("Unable to proceed from setup step 2.");
      }
    }
  },
  {
    pattern: /^user enables extension and switch back to the app$/i,
    run: async () => {
      await checkpoint("Enable Safari extension");
      await driver.activateApp(env.ios.settingsBundleId);
      await clickByLabels(["Apps"]);
      await clickByLabels(["Safari"]);
      await clickByLabels(["Extensions"]);
      await clickByLabels(["node.", "IOMDAutofill"]);
      await clickIfVisible(`//XCUIElementTypeSwitch[@value='0']`);
      await clickByLabels(["All Websites"]);
      await clickByLabels(["Allow"]);
      await driver.activateApp(env.apps.iomdBundleId);
    }
  },
  {
    pattern: /^user validates Enables extension screen$/i,
    run: async () => {
      await checkpoint("Extension enabled screen");
      await clickByLabels(["Taking you to the dashboard...", "Continue", "Next"]);
      await pause(3000);
    }
  },
  {
    pattern: /^user validates animated cards in the homepage$/i,
    run: async () => {
      await checkpoint("Homepage animated cards");
      await clickByLabels(["Open a Safari browser"]);
      await driver.activateApp(env.apps.iomdBundleId);
      await clickByLabels(["Import Passwords"]);
      await clickIfVisible(`//XCUIElementTypeOther[1]/XCUIElementTypeButton`);
      await clickByLabels(["Open a Safari browser"]);
      await driver.activateApp(env.apps.iomdBundleId);
      await clickByLabels(["Try It", "Try it"]);
    }
  },
  {
    pattern: /^user validates forward email screen on welcome email$/i,
    run: async () => {
      await checkpoint("Forward email welcome screen");
      await clickByLabels(["GOT IT", "Got it"]);
      await clickIfVisible(`(//XCUIElementTypeOther[1]/XCUIElementTypeButton)[1]`);
    }
  },
  {
    pattern: /^user validates Business Tab screen$/i,
    run: async () => {
      await clickIfVisible(selectorValue("businessnametab"));
      await checkpoint("Business tab");
    }
  },
  {
    pattern: /^user validates Interaction Tab screen$/i,
    run: async () => {
      await clickIfVisible(selectorValue("interactionstab"));
      await checkpoint("Interaction tab");
    }
  },
  {
    pattern: /^user validates Messages Tab screen$/i,
    run: async () => {
      await clickIfVisible(selectorValue("messagetab"));
      await checkpoint("Messages tab");
    }
  },
  {
    pattern: /^user validates Settings screen$/i,
    run: async () => {
      await clickIfVisible(selectorValue("settingstab"));
      await checkpoint("Settings screen");
    }
  },
  {
    pattern: /^user validates Profile Information screen$/i,
    run: async () => {
      await clickIfVisible(selectorValue("profilestab"));
      await checkpoint("Profile information screen");
    }
  },
  {
    pattern: /^user validates ShowMeMagic in Settings screen$/i,
    run: async () => {
      await clickIfVisible(selectorValue("settingstab"));
      await clickByLabels(["Show me the magic", "Show Me The Magic"]);
      await checkpoint("Show me the magic screen");
      await clickIfVisible(`(//XCUIElementTypeOther[1]/XCUIElementTypeButton)[1]`);
      await driver.activateApp(env.apps.iomdBundleId);
    }
  },
  {
    pattern: /^user validates Credentials in Settings screen$/i,
    run: async () => {
      await clickIfVisible(selectorValue("settingstab"));
      await clickByLabels(["Saved Credentials"]);
      await checkpoint("Saved credentials screen");
      await clickIfVisible(`//XCUIElementTypeOther[1]/XCUIElementTypeButton`);
      await clickByLabels(["Add Credential"]);
      await checkpoint("Add credential screen");
      await clickIfVisible(`(//XCUIElementTypeOther[1]/XCUIElementTypeButton)[1]`);
    }
  },
  {
    pattern: /^user launches the application$/i,
    run: async () => {
      await driver.launchApp();
    }
  },
  {
    pattern: /^user completes onboarding flow(?: with animation| with card data| with card data and validation| with invalid address| with validation)?$/i,
    run: async () => {
      await driver.launchApp();
      await clickIfVisible(`//*[@name="Allow" or @label="Allow"]`);

      if (await clickIfVisible(`//XCUIElementTypeButton[contains(@name,'Continue')]`)) {
        const onboardingField = await firstVisibleElement([
          `//XCUIElementTypeTextField[@value='e.g. your name']`,
          `//XCUIElementTypeTextField[contains(@value,'your name')]`,
          `//XCUIElementTypeTextField`,
          `//android.widget.EditText`
        ]);
        await onboardingField.click();
        await onboardingField.clearValue();
        await onboardingField.setValue(randomTokenPrefix());
        await clickIfVisible(`//*[contains(@name,'Done')]`);
        await pause(5000);
        await tapSelector(`//XCUIElementTypeButton[contains(@name,'Create')]`);
        await tapSelector(`//XCUIElementTypeStaticText[contains(@name,'You are all set')]`);
        return;
      }

      await clickIfVisible(`//*[@name="Next" or @label="Next"]`);
      await clickIfVisible(`//*[@name="DO IT LATER" or @label="DO IT LATER"]`);
      await clickIfVisible(selectorValue("showmemagicbtn"));
      await clickIfVisible(selectorValue("okgotitbtn"));
    }
  },
  {
    pattern: /^user enters the store password$/i,
    run: async () => {
      await typeSelector(`//XCUIElementTypeSecureTextField[@name='Enter store password']`, "nodeC0nnect");
      await tapSelector(`//XCUIElementTypeButton[@name='Enter']`);
      await pause(5000);
    }
  },
  {
    pattern: /^user enables node extension$/i,
    run: async () => {
      await tapSelector(`~PageFormatMenuButton`);
      await tapSelector(`//XCUIElementTypeCell[@name='ManageExtensions']`);
      const nodeToggle = await $(`//XCUIElementTypeSwitch[@name='node.']`);
      await nodeToggle.waitForDisplayed({ timeout: 20000 });
      if ((await nodeToggle.getAttribute("value")) === "0") {
        await nodeToggle.click();
      }
      await tapSelector(`~Done`);
      await driver.execute("mobile: tap", { x: 200, y: 200 });
    }
  },
  {
    pattern: /^user selects first product and proceeds to checkout$/i,
    run: async () => {
      await driver.execute("mobile: swipe", { direction: "up" });
      await tapSelector(`//XCUIElementTypeOther[contains(@name,'Snowboard')]`);
      await tapSelector(`//*[@name='Add to cart' or @label='Add to cart']`);
      await tapSelector(`//*[@name='Check out' or @label='Check out' or @name='CHECK OUT']`);
    }
  },
  {
    pattern: /^user enters checkout contact details and selects suggested address$/i,
    run: async () => {
      const email = `qa_test${Date.now()}@mail.com`;
      const firstNames = ["John", "Michael", "David", "Chris", "Daniel"];
      const lastNames = ["Smith", "Brown", "Taylor", "Wilson", "Clark"];
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

      await typeSelector(`//XCUIElementTypeTextField[@name='Email or mobile phone number']`, email);
      await typeSelector(`//XCUIElementTypeTextField[@name='First name (optional)']`, firstName);
      await typeSelector(`//XCUIElementTypeTextField[@name='Last name']`, lastName);

      const addressField = await $(`//XCUIElementTypeTextField[@name='Address']`);
      await addressField.waitForDisplayed({ timeout: 20000 });
      await addressField.click();
      await addressField.clearValue();
      for (const character of "670 White") {
        await addressField.addValue(character);
        await pause(100);
      }
      await pause(2500);
      await driver.execute("mobile: tap", { x: 160, y: 323 });
      await clickIfVisible(`~Done`);
    }
  },
  {
    pattern: /^user enters card details and closes keyboard$/i,
    run: async () => {
      const continueButtons = await $$(`//*[@name='Continue to payment' or @label='Continue to payment' or contains(@name,'Continue')]`);
      if ((await continueButtons.length) > 0) {
        await continueButtons[0].click();
        await pause(1400);
      }

      await typeSelector(`//*[@name='Card number' or contains(@value,'Card number')]`, "1");
      const future = new Date();
      future.setMonth(future.getMonth() + Math.floor(Math.random() * 60) + 1);
      const expiry = `${String(future.getMonth() + 1).padStart(2, "0")}/${future.getFullYear()}`;
      await typeSelector(`//*[@name='Expiration date' or contains(@value,'Expiration date')]`, expiry);
      await typeSelector(`//*[@name='Security code' or contains(@value,'Security code')]`, String(Math.floor(100 + Math.random() * 900)));
      await clickIfVisible(`~Done`);
    }
  },
  {
    pattern: /^user clicks pay now button$/i,
    run: async () => {
      await tapSelector(`~Pay now`);
    }
  },
  {
    pattern: /^user clicks on track my order button from thank you page$/i,
    run: async () => {
      await tapSelector(`//XCUIElementTypeButton[contains(@name,'Track My Order')]`);
    }
  },
  {
    pattern: /^user selects first business and clicks buy again$/i,
    run: async () => {
      await tapSelector(`//XCUIElementTypeStaticText[@name='Iomdnewgen21']`);
      await pause(3000);
      await tapSelector(`(//XCUIElementTypeStaticText[@name='The Compare at Price Snowboard'])[1]`);
      await pause(5000);
      await tapSelector(`//XCUIElementTypeStaticText[@name='  Buy again']`);
    }
  },
  {
    pattern: /^user enters the ".*" in the inputbox$/i,
    run: async (_match, parameters) => {
      await typeSelector(selectorValue("emailvalue"), firstValue(parameters));
    }
  },
  {
    pattern: /^user enters ".*" in the .* field$/i,
    run: async (_match, parameters) => {
      const value = firstValue(parameters);
      const fieldName = Object.keys(parameters)[0]?.toLowerCase() ?? "";
      const candidateSelectors = [
        `//*[@value=${JSON.stringify(fieldName)} or @name=${JSON.stringify(fieldName)} or contains(@label, ${JSON.stringify(fieldName)})]`,
        `//*[@placeholder=${JSON.stringify(fieldName)} or contains(@name, ${JSON.stringify(fieldName)})]`,
        `//XCUIElementTypeTextField`,
        `//XCUIElementTypeSecureTextField`
      ];

      for (const selector of candidateSelectors) {
        const elements = await $$(selector);
        if ((await elements.length) > 0) {
          await elements[0].setValue(value);
          return;
        }
      }

      throw new Error(`Unable to resolve an input field for step parameters: ${JSON.stringify(parameters)}`);
    }
  },
  {
    pattern: /^user clicks on the fetch button$/i,
    run: async () => {
      await tapSelector(selectorValue("fetch"));
    }
  },
  {
    pattern: /^user clicks on the save tokenized email button$/i,
    run: async () => {
      await tapSelector(selectorValue("savetokenizedemailbtn"));
    }
  },
  {
    pattern: /^user clicks on the check your message button$/i,
    run: async () => {
      await tapSelector(selectorValue("checkyourmessagebtn"));
    }
  },
  {
    pattern: /^user enables the extension$/i,
    run: async () => {
      await clickIfVisible(selectorValue("autofillextension"));
      await tapSelector(selectorValue("iomdextension"));
      await clickIfVisible(selectorValue("translatetoenglish"));
    }
  },
  {
    pattern: /^user clicks fill button from extension$/i,
    run: async () => {
      if (!(await clickIfVisible(selectorValue("fillbuttonclick")))) {
        await tapSelector(selectorValue("fillbutton"));
      }
    }
  },
  {
    pattern: /^user selects (tokenised email|tokenised username|tokenised address|tokenised phonenumber|personal email|personal username|personal address|personal phonenumber|anonymous email|anonymous name|phonenumber|user name|address) from extension$/i,
    run: async (match) => {
      const label = match[1].toLowerCase();
      await clickByLabel(extensionDataMap[label]);
    }
  },
  {
    pattern: /^user accepts the popup$/i,
    run: async () => {
      const okSelectors = [selectorValue("okbtn"), selectorValue("savepwdokbtn"), selectorValue("savecredentialokbtn"), `//*[@name="OK" or @label="OK"]`];
      for (const selector of okSelectors) {
        if (await clickIfVisible(selector)) {
          return;
        }
      }
      throw new Error("Popup OK button was not visible.");
    }
  },
  {
    pattern: /^user launches the website ".*"$/i,
    run: async (_match, parameters) => {
      const url = firstValue(parameters);
      await browser.url(url);
    }
  },
  {
    pattern: /^user accepts the accept all cookies button$/i,
    run: async () => {
      await clickIfVisible(selectorValue("acceptcookies"));
      await clickIfVisible(selectorValue("acceptcookiestedbaker"));
    }
  },
  {
    pattern: /^user clicks ".*" button by only (?:name|staictext) in the website$/i,
    run: async (_match, parameters) => {
      await clickByLabel(firstValue(parameters));
    }
  },
  {
    pattern: /^user enters data in (?:signup|signin|login) page for .* website$/i,
    run: async () => {
      await fillVisibleFields([testData.personalMailId, "Password@123", testData.personalFirstName, testData.personalLastName]);
    }
  },
  {
    pattern: /^user enters random email in email id textbox for .* website$/i,
    run: async () => {
      const email = `autogen+${Date.now()}@example.com`;
      const filled = await typeFirstVisible(
        [
          selectorValue("bookemailidfield"),
          selectorValue("airemailidfield"),
          selectorValue("geemailidfield"),
          "//XCUIElementTypeTextField",
          "//android.widget.EditText"
        ],
        email
      );
      if (!filled) {
        throw new Error("Unable to locate an email field for random email entry.");
      }
    }
  },
  {
    pattern: /^user fills password for .* website$/i,
    run: async () => {
      const filled = await typeFirstVisible(
        [
          selectorValue("nytimespassword"),
          selectorValue("coravinpassword"),
          "//XCUIElementTypeSecureTextField",
          "//android.widget.EditText"
        ],
        "Password@123"
      );
      if (!filled) {
        throw new Error("Unable to locate a password field.");
      }
    }
  },
  {
    pattern: /^user fills the card details in .* website$/i,
    run: async () => {
      await fillVisibleFields([testData.iomdPayCardNo, testData.firstName, testData.iomdExpiryDate, testData.anonymousCvv]);
    }
  },
  {
    pattern: /^user close(?:s)? the popup.*$/i,
    run: async () => {
      const closeSelectors = [
        selectorValue("ecoyaclosepopup"),
        selectorValue("aclosepopupfield"),
        `//*[@name="Close" or @label="Close" or contains(@name,"close")]`,
        `//*[@name="Dismiss" or @label="Dismiss"]`
      ];
      for (const selector of closeSelectors) {
        if (await clickIfVisible(selector)) {
          return;
        }
      }
      throw new Error("No close popup control was visible.");
    }
  },
  {
    pattern: /^user selects first product from .* application$/i,
    run: async () => {
      const selectors = [
        selectorValue("coravinfirstproduct"),
        selectorValue("tedbakerfirstproduct"),
        selectorValue("pyproductfield"),
        selectorValue("scproductfield"),
        selectorValue("productlink")
      ];
      for (const selector of selectors) {
        if (await clickIfVisible(selector)) {
          return;
        }
      }
      throw new Error("No first-product selector was visible.");
    }
  },
  {
    pattern: /^user clicks (?:add to cart|continue|continue to payment|checkout|paynow) button.*$/i,
    run: async (match) => {
      const action = match[0].toLowerCase();
      const labelMap: Array<[string, string[]]> = [
        ["add to cart", ["Add to cart", "ADD TO CART"]],
        ["continue to payment", ["Continue to payment"]],
        ["continue", ["Continue"]],
        ["checkout", ["Check out", "CHECK OUT", "Checkout"]],
        ["paynow", ["Pay now"]]
      ];
      for (const [token, labels] of labelMap) {
        if (action.includes(token)) {
          for (const label of labels) {
            if (await clickIfVisible(ios() ? `//*[@name=${JSON.stringify(label)} or @label=${JSON.stringify(label)}]` : `//*[@text=${JSON.stringify(label)}]`)) {
              return;
            }
          }
        }
      }
      throw new Error(`No generic button mapping found for step: ${match[0]}`);
    }
  },
  {
    pattern: /^user switches back to the iomd application$/i,
    run: async () => {
      await driver.activateApp(env.apps.iomdBundleId);
    }
  },
  {
    pattern: /^user navigates to the safari application$/i,
    run: async () => {
      await driver.activateApp(env.ios.safariBundleId);
    }
  },
  {
    pattern: /^user navigates to the settings application and enables the extension$/i,
    run: async () => {
      await driver.activateApp(env.ios.settingsBundleId);
      await clickByLabel("Apps");
      await clickByLabel("Safari");
      await clickByLabel("Extensions");
      await clickByLabel("node.");
      await clickIfVisible(selectorValue("allowextension"));
      await clickByLabel("All Websites");
      await clickIfVisible(selectorValue("allowbutton"));
    }
  },
  {
    pattern: /^user verifies and clicks on the business tab$/i,
    run: async () => {
      await tapSelector(selectorValue("businessnametab"));
    }
  },
  {
    pattern: /^user verifies and clicks on the message tab$/i,
    run: async () => {
      await tapSelector(selectorValue("messagetab"));
    }
  },
  {
    pattern: /^user verifies and clicks on the interactions tab$/i,
    run: async () => {
      await tapSelector(selectorValue("interactionstab"));
    }
  },
  {
    pattern: /^user clicks on the profile tab$/i,
    run: async () => {
      await tapSelector(selectorValue("profilestab"));
    }
  },
  {
    pattern: /^user clicks on the settings tab$/i,
    run: async () => {
      await tapSelector(selectorValue("settingstab"));
    }
  },
  {
    pattern: /^user clicks on the home tab$/i,
    run: async () => {
      await tapSelector(selectorValue("hometab"));
    }
  },
  {
    pattern: /^user clicks ".*" (?:business|button) by only name in the iomd transactions$/i,
    run: async (_match, parameters) => {
      await clickByLabel(firstValue(parameters));
    }
  },
  {
    pattern: /^user verifies (login|pwdchange|others|register|checkout|payment|login-guest) from interaction tab$/i,
    run: async (match) => {
      const key = match[1].toLowerCase();
      await tapSelector(interactionMap[key]);
    }
  },
  {
    pattern: /^user verifies the display of the ".*" in the interaction tab(?: for coravin)?$/i,
    run: async (_match, parameters) => {
      await verifyTextPresent(firstValue(parameters));
    }
  },
  {
    pattern: /^user verifies the display of the ".*" in the list$/i,
    run: async (_match, parameters) => {
      await verifyTextPresent(firstValue(parameters));
    }
  },
  {
    pattern: /^user veriifes the dispay of the ".*" in the page$/i,
    run: async (_match, parameters) => {
      await verifyTextPresent(firstValue(parameters));
    }
  },
  {
    pattern: /^user verifies the ".*" and ".*" and ".*" in the page$/i,
    run: async (_match, parameters) => {
      for (const value of allValues(parameters)) {
        await verifyTextPresent(value);
      }
    }
  },
  {
    pattern: /^user verifies the auto fill details for (.+) are filled as expected for the website$/i,
    run: async (match) => {
      const key = match[1].trim().toLowerCase();
      const expected = autofillExpectationMap[key];
      if (!expected) {
        throw new Error(`No autofill expectation mapping found for "${match[1]}"`);
      }
      await verifyTextPresent(expected);
    }
  },
  {
    pattern: /^user verifies ".*" is displayed$/i,
    run: async (_match, parameters) => {
      await verifyTextPresent(firstValue(parameters));
    }
  },
  {
    pattern: /^user verifies the business detail page for .*$/i,
    run: async () => {
      await verifyTextPresent("Business");
    }
  }
];

class LegacyStepExecutor {
  async execute(stepText: string, parameters: Record<string, string>): Promise<void> {
    const normalized = stepText.trim();
    for (const handler of handlers) {
      const match = normalized.match(handler.pattern);
      if (match) {
        await handler.run(match, parameters);
        return;
      }
    }

    throw new Error(`Legacy step executor has no implementation for: ${stepText}`);
  }
}

export const legacyStepExecutor = new LegacyStepExecutor();
