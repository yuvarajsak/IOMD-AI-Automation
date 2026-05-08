import { sharedConfig } from "./wdio.shared.conf";
import { env } from "./src/config/env";
import { resetIosSimulator } from "./src/support/ios-simulator";

export const config = {
  ...sharedConfig,
  onPrepare: async function () {
    resetIosSimulator();
  },
  capabilities: [
    {
      platformName: "iOS",
      "appium:automationName": env.ios.automationName,
      "appium:deviceName": env.ios.deviceName,
      "appium:platformVersion": env.ios.platformVersion,
      "appium:udid": env.ios.udid,
      "appium:app": env.ios.app,
      "appium:bundleId": env.ios.bundleId,
      "appium:noReset": false,
      "appium:fullReset": true,
      "appium:newCommandTimeout": 180,
      "appium:autoAcceptAlerts": true
    }
  ]
};
