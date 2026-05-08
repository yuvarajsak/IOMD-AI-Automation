import path from "node:path";
import dotenv from "dotenv";
import { env } from "./src/config/env";
import { allureResultsDir, cleanReportOutput, generateHtmlReports } from "./src/support/reports";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const sharedConfig = {
  runner: "local",
  hostname: env.appium.host,
  port: env.appium.port,
  path: "/",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true
    }
  },
  framework: "cucumber",
  cucumberOpts: {
    require: ["./src/support/hooks.ts", "./src/steps/**/*.ts"],
    timeout: 120000,
    failFast: false,
    backtrace: false,
    snippets: true
  },
  specs: ["./features/**/*.feature"],
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: allureResultsDir,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true
      }
    ]
  ],
  waitforTimeout: 20000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 2,
  services: [
    [
      "appium",
      {
        command: "appium",
        args: {
          address: env.appium.host,
          port: env.appium.port,
          relaxedSecurity: true
        }
      }
    ]
  ],
  onPrepare: async function () {
    await cleanReportOutput();
  },
  onComplete: async function () {
    await generateHtmlReports();
    console.log("Reports generated:");
    console.log("  Extent HTML: artifacts/reports/extent-report.html");
    console.log("  HTML Report: artifacts/reports/html-report.html");
    console.log("  Allure results: artifacts/allure-results");
  }
};
