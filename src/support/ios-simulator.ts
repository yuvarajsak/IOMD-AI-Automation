import { execFileSync } from "node:child_process";
import { env } from "../config/env";

const runSimctl = (args: string[]): void => {
  execFileSync("xcrun", ["simctl", ...args], {
    stdio: "inherit"
  });
};

const ignoreFailure = (fn: () => void): void => {
  try {
    fn();
  } catch {
    // A simulator may already be shut down or unavailable momentarily.
  }
};

export const resetIosSimulator = (targetUdid = env.ios.udid): void => {
  const udid = targetUdid;

  if (!udid) {
    return;
  }

  console.log(`Resetting iOS simulator ${udid} before run`);
  ignoreFailure(() => runSimctl(["shutdown", udid]));
  runSimctl(["erase", udid]);
};
