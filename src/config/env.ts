const value = (key: string, fallback = ""): string => (process.env[key] ?? fallback).trim();

export const env = {
  appium: {
    host: value("APPIUM_HOST", "127.0.0.1"),
    port: Number(value("APPIUM_PORT", "4723"))
  },
  android: {
    platformVersion: value("ANDROID_PLATFORM_VERSION"),
    deviceName: value("ANDROID_DEVICE_NAME", "Android Emulator"),
    automationName: value("ANDROID_AUTOMATION_NAME", "UiAutomator2"),
    app: value("ANDROID_APP"),
    appPackage: value("ANDROID_APP_PACKAGE"),
    appActivity: value("ANDROID_APP_ACTIVITY")
  },
  ios: {
    platformVersion: value("IOS_PLATFORM_VERSION"),
    deviceName: value("IOS_DEVICE_NAME", "iPhone 15"),
    automationName: value("IOS_AUTOMATION_NAME", "XCUITest"),
    udid: value("IOS_UDID"),
    app: value("IOS_APP"),
    bundleId: value("IOS_BUNDLE_ID"),
    safariBundleId: value("IOS_SAFARI_BUNDLE_ID", "com.apple.mobilesafari"),
    settingsBundleId: value("IOS_SETTINGS_BUNDLE_ID", "com.apple.Preferences")
  },
  apps: {
    iomdBundleId: value("IOMD_BUNDLE_ID", "com.iomd.i2iautofill"),
    iomdAdminBundleId: value("IOMD_ADMIN_BUNDLE_ID")
  },
  ai: {
    provider: value("AI_PROVIDER", "offline"),
    ollamaModel: value("OLLAMA_MODEL", "llama3.1:8b"),
    ollamaBaseUrl: value("OLLAMA_BASE_URL", "http://127.0.0.1:11434"),
    huggingFaceModel: value("HUGGINGFACE_MODEL", "google/flan-t5-large"),
    huggingFaceApiToken: value("HUGGINGFACE_API_TOKEN")
  }
};
