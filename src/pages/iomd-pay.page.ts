import { BasePage } from "./base.page";
import { commonUtilityMethodsPage } from "./common-utility-methods.page";
import { legacyJavaMethodBridge } from "../support/legacy-java-method-bridge";

export class IomdPayMethodsPage extends BasePage {
  constructor() {
    super("IomdPayMethodsPage");
  }

  async userEntersCredentialsInIOMDAdminAndNavigateToOrders(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userEntersCredentialsInIOMDAdminAndNavigateToOrders", [], []));
  }

  async userVerifiesOrderNumberInAdmin(orderno: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userVerifiesOrderNumberInAdmin", ["orderno"], [orderno]));
  }

  async userVerifiesDataInIOMDPayExt(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userVerifiesDataInIOMDPayExt", [], []));
  }

  async userSelectInvalidAddressInIOMDPayExt(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userSelectInvalidAddressInIOMDPayExt", [], []));
  }

  async userVerifiesTotalWithShippingCost(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userVerifiesTotalWithShippingCost", [], []));
  }

  async userVerifiesTotalWithShippingCostForWoo(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userVerifiesTotalWithShippingCostForWoo", [], []));
  }

  async userVerifiesTotalWithShippingCostForShopify(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userVerifiesTotalWithShippingCostForShopify", [], []));
  }

  async userVerifiesTotalWithShippingCostForShopifyWithDiscount(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userVerifiesTotalWithShippingCostForShopifyWithDiscount", [], []));
  }

  async userVerifiesTotalWithShippingCostForWooWithDiscount(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userVerifiesTotalWithShippingCostForWooWithDiscount", [], []));
  }

  async userValidatesDiscountsForBuyAgain(discount: string): Promise<boolean> {
    const source = await driver.getPageSource();
    return source.includes(discount);
  }

  async userValidatesAutofilledDataInPayment(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userValidatesAutofilledDataInPayment", [], []));
  }

  async userEntersThePasswordandClicksOnTheEnterButton(): Promise<boolean> {
    return commonUtilityMethodsPage.enterStorePassword();
  }

  async userfillsdataincheckoutpageforNodenextGen(): Promise<boolean> {
    return commonUtilityMethodsPage.enterCheckoutDetails();
  }

  async userfillscarddatafor_BuyAgain(): Promise<boolean> {
    return commonUtilityMethodsPage.enterCardDetails();
  }

  async userverifiesdeeplinkcontentandclicksonit(): Promise<boolean> {
    const selector = `//*[contains(@name,'Open') or contains(@label,'Open') or contains(@text,'Open')]`;
    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 20000 });
    await element.click();
    return true;
  }

  async userverifiesdeeplink_testfairy_clicksonit(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "userverifiesdeeplink_testfairy_clicksonit", [], []));
  }

  async useruserdownloadappfromtestfairy(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("iomdPayMethods", "useruserdownloadappfromtestfairy", [], []));
  }
}

export const iomdPayMethodsPage = new IomdPayMethodsPage();
