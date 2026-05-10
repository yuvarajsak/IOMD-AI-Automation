import { config as buyAgainConfig } from "./wdio.codegen.buyagain.ios.conf";

export const config = {
  ...buyAgainConfig,
  cucumberOpts: {
    ...buyAgainConfig.cucumberOpts,
    tags: "@codegen and @step14 and @buyagain and @coverage"
  }
};
