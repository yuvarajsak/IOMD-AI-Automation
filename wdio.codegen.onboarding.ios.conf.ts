import { sharedConfig } from "./wdio.shared.conf";
import { resetIosSimulator } from "./src/support/ios-simulator";

const IOS_UDID = "F47E1EF9-7115-42DC-BC53-CBDF77BA9372";

export const config = {
  ...sharedConfig,
  specs: ["./features/codegen/step03-onboarding.feature"],
  onPrepare: async function () {
    resetIosSimulator(IOS_UDID);
  },
  capabilities: [
    {
      platformName: "iOS",
      "appium:automationName": "XCUITest",
      "appium:deviceName": "codex-onboarding-iPhone15",
      "appium:platformVersion": "17.4",
      "appium:udid": IOS_UDID,
      "appium:app": "/Users/ideas2it/Downloads/NodeApp/IOMDAutofill.app",
      "appium:bundleId": "com.iomd.i2iautofill",
      "appium:noReset": false,
      "appium:fullReset": true,
      "appium:newCommandTimeout": 180,
      "appium:autoAcceptAlerts": true
    }
  ]
};
