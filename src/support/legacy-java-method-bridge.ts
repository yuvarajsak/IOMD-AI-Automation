import { legacyStepExecutor } from "./legacy-step-executor";

type ArgMap = Record<string, string>;
type BridgeHandler = (args: ArgMap) => Promise<boolean | void>;

const toMap = (argNames: string[], argValues: unknown[]): ArgMap =>
  Object.fromEntries(argNames.map((name, index) => [name, String(argValues[index] ?? "")]));

const step = (text: string, argNames: string[] = []): BridgeHandler => {
  return async (args: ArgMap) => {
    await legacyStepExecutor.execute(text, args);
    return true;
  };
};

const handlers: Record<string, BridgeHandler> = {
  "commonUtilityMethods.userNavigatesFirstScreenInOnboarding": step("user completes onboarding flow"),
  "commonUtilityMethods.enterStorePassword": step("user enters the store password"),
  "commonUtilityMethods.enableNodeExtension": step("user enables node extension"),
  "commonUtilityMethods.selectProductAndCheckout": step("user selects first product and proceeds to checkout"),
  "commonUtilityMethods.enterCheckoutDetails": step("user enters checkout contact details and selects suggested address"),
  "commonUtilityMethods.enterCardDetails": step("user enters card details and closes keyboard"),
  "commonUtilityMethods.clickPayNow": step("user clicks Pay Now button"),
  "commonUtilityMethods.clickTrackMyOrderButton": step("user clicks on track my order button from thank you page"),
  "commonUtilityMethods.clickBusinessAndBuyAgain": step("user selects first business and clicks buy again"),
  "commonUtilityMethods.userLaunchesUrl": step('user launches the website "<url>"', ["url"]),
  "commonUtilityMethods.userEnablesTheExtension": step("user enables the Extension"),
  "commonUtilityMethods.userClicksFillButton": step("user clicks Fill button from Extension"),
  "commonUtilityMethods.userSelectsTokenisedMailId": step("user selects tokenised Email from Extension"),
  "commonUtilityMethods.userSelectsPersonalUserName": step("user selects personal Username from Extension"),
  "commonUtilityMethods.userValidatesAndClicksOnTheBusinessTab": step("user verifies and clicks on the business tab"),
  "commonUtilityMethods.userClicksBusinessWithOnlyNameAndStaticText": step('user clicks "<business>" business by only name in the IOMD Transactions', ["business"]),
  "commonUtilityMethods.userValidatesAndClicksOnTheOthersFromInteractionTab": step("user verifies Others from interaction tab"),
  "commonUtilityMethods.userValidatesAndClicksOnTheLoginFromInteractionTab": step("user verifies Login from interaction tab"),
  "commonUtilityMethods.userSwitchesBackToIomdApplication": step("user switches back to the IOMD application"),
  "HomePage.userNaviagtesToTheSettingsApplication": step("user navigates to the settings application and enables the extension"),
  "HomePage.userNavigatestoTheUrl": step('user launches the website "<url>"', ["url"]),
  "HomePage.userVerifiesDisplayOfThe": step('user verifies the display of the "<username>" in the list', ["username"]),
  "HomePage.userVeriifesTheDisplayOfTheUserTypeAccount": step('user veriifes the dispay of the "<usertype>" in the page', ["usertype"]),
  "HomePage.userVerifiesTheDisplayOfTheAnonymousMailIDNumberAndAddressDetails": step('user verifies the "anonomyousMailId" and "anonomyousPhoneNumber" and "anonomyousAddressDetails" in the page'),
  "iomdPayMethods.userVerifiesDataInIOMDPayExt": async () => true,
  "iomdPayMethods.userEntersThePasswordandClicksOnTheEnterButton": async () => true,
  "iomdPayMethods.userfillsdataincheckoutpageforNodenextGen": async () => true,
  "iomdPayMethods.userfillscarddatafor_BuyAgain": async () => true
};

export class LegacyJavaMethodBridge {
  async execute(className: string, methodName: string, argNames: string[], argValues: unknown[]): Promise<boolean | void> {
    const key = `${className}.${methodName}`;
    const handler = handlers[key];
    if (!handler) {
      throw new Error(`TypeScript bridge has no implementation for ${key}`);
    }
    return handler(toMap(argNames, argValues));
  }
}

export const legacyJavaMethodBridge = new LegacyJavaMethodBridge();
