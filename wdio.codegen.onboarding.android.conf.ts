import { sharedConfig } from "./wdio.shared.conf";

export const config = {
  ...sharedConfig,
  specs: ["./features/codegen/step03-onboarding.feature"],
  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Android Emulator",
      "appium:platformVersion": "14",
      "appium:app": "/Users/ideas2it/Downloads/NodeApp/IOMDAutofill.apk",
      "appium:appPackage": "com.iomd.i2iautofill",
      "appium:appActivity": ".MainActivity",
      "appium:noReset": false,
      "appium:fullReset": true,
      "appium:newCommandTimeout": 180,
      "appium:autoGrantPermissions": true
    }
  ]
};
