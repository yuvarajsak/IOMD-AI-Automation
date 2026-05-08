import path from "node:path";
import dotenv from "dotenv";
import { env } from "./src/config/env";

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
  reporters: ["spec"],
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
  ]
};
