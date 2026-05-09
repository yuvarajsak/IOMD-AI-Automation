import { sharedConfig } from "./wdio.shared.conf";
import { env } from "./src/config/env";
import { resetIosSimulator } from "./src/support/ios-simulator";

const IOS_UDID = process.env.CODEGEN_BUYAGAIN_IOS_UDID || "F47E1EF9-7115-42DC-BC53-CBDF77BA9372";
const IOS_DEVICE_NAME = process.env.CODEGEN_BUYAGAIN_IOS_DEVICE_NAME || "codex-onboarding-iPhone15";
const IOS_PLATFORM_VERSION = process.env.CODEGEN_BUYAGAIN_IOS_PLATFORM_VERSION || "17.4";
const IOS_APP = process.env.CODEGEN_BUYAGAIN_IOS_APP || "/Users/ideas2it/Downloads/NodeApp/IOMDAutofill.app";
const IOS_BUNDLE_ID = process.env.CODEGEN_BUYAGAIN_IOS_BUNDLE_ID || "com.iomd.i2iautofill";

export const config = {
  ...sharedConfig,
  specs: ["./features/codegen/step14-buy-again.feature"],
  cucumberOpts: {
    ...sharedConfig.cucumberOpts,
    require: ["./src/support/hooks.ts", "./src/steps/codegen-onboarding.steps.ts", "./src/steps/codegen-buy-again.steps.ts"],
    tags: "@codegen and @step14 and @buyagain"
  },
  onPrepare: async function () {
    await sharedConfig.onPrepare();
    resetIosSimulator(IOS_UDID);
  },
  capabilities: [
    {
      platformName: "iOS",
      "appium:automationName": env.ios.automationName || "XCUITest",
      "appium:deviceName": IOS_DEVICE_NAME,
      "appium:platformVersion": IOS_PLATFORM_VERSION,
      "appium:udid": IOS_UDID,
      "appium:app": IOS_APP,
      "appium:bundleId": IOS_BUNDLE_ID,
      "appium:noReset": false,
      "appium:fullReset": true,
      "appium:newCommandTimeout": 240,
      "appium:autoAcceptAlerts": true,
      "appium:includeSafariInWebviews": true,
      "appium:safariAllowPopups": true
    }
  ]
};
