import { sharedConfig } from "./wdio.shared.conf";
import { env } from "./src/config/env";

export const config = {
  ...sharedConfig,
  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": env.android.automationName,
      "appium:deviceName": env.android.deviceName,
      "appium:platformVersion": env.android.platformVersion,
      "appium:app": env.android.app,
      "appium:appPackage": env.android.appPackage,
      "appium:appActivity": env.android.appActivity,
      "appium:newCommandTimeout": 180,
      "appium:autoGrantPermissions": true
    }
  ]
};
