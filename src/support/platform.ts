export const platform = {
  isAndroid(): boolean {
    return driver.capabilities.platformName?.toString().toLowerCase() === "android";
  },
  isIOS(): boolean {
    return driver.capabilities.platformName?.toString().toLowerCase() === "ios";
  }
};
