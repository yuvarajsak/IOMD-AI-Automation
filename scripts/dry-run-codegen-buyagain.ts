import fs from "node:fs";
import path from "node:path";

const featurePath = path.resolve(process.cwd(), "features/codegen/step14-buy-again.feature");
const stepDefinitionPatterns = [
  /^Codegen Buy Again starts from completed onboarding$/,
  /^Codegen Buy Again opens Shopify storefront "([^"]+)"$/,
  /^Codegen Buy Again unlocks the Shopify store$/,
  /^Codegen Buy Again enables the node Safari extension$/,
  /^Codegen Buy Again opens any available Shopify product$/,
  /^Codegen Buy Again adds the product to cart and starts checkout$/,
  /^Codegen Buy Again completes checkout contact details$/,
  /^Codegen Buy Again enters payment details$/,
  /^Codegen Buy Again submits the order$/,
  /^Codegen Buy Again tracks the order from the thank you page$/,
  /^Codegen Buy Again returns to the IOMD app$/,
  /^Codegen Buy Again purchased product is shown in the node app$/,
  /^Codegen Buy Again product can be ordered again from IOMD$/
];

const stepLinePattern = /^\s*(Given|When|Then|And|But)\s+(.+?)\s*$/;
const feature = fs.readFileSync(featurePath, "utf8");
const steps = feature
  .split(/\r?\n/)
  .map((line, index) => ({ index: index + 1, match: line.match(stepLinePattern) }))
  .filter((item): item is { index: number; match: RegExpMatchArray } => Boolean(item.match))
  .map((item) => ({ line: item.index, text: item.match[2] }));

const missing = steps.filter((step) => !stepDefinitionPatterns.some((pattern) => pattern.test(step.text)));

if (missing.length > 0) {
  console.error("Codegen Buy Again dry run failed. Missing step definitions:");
  for (const step of missing) {
    console.error(`  ${featurePath}:${step.line} ${step.text}`);
  }
  process.exit(1);
}

console.log("Codegen Buy Again dry run passed.");
console.log(`Feature: ${featurePath}`);
console.log(`Validated steps: ${steps.length}`);
