import type { SelectorRegistry } from "../../types/selector";

export const legacySafariLocators: SelectorRegistry = {
  apps: { strategy: "xpath", value: "//XCUIElementTypeButton[@name='com.apple.settings.apps']" },
  safari: { strategy: "xpath", value: "//XCUIElementTypeCell[@name='Safari']" },
  extension: { strategy: "xpath", value: "//XCUIElementTypeCell[@name='Extensions']" },
  extensionpopup: { strategy: "xpath", value: "//XCUIElementTypeCell[@name='node.']" },
  allowextension: { strategy: "xpath", value: "//XCUIElementTypeSwitch[@name='Allow Extension']" },
  askwebsite: { strategy: "xpath", value: "//XCUIElementTypeCell[@name='All Websites']" },
  allowbutton: { strategy: "xpath", value: "//XCUIElementTypeCell[@name='Allow']" },
};
