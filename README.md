# IOMD TS Mobile Automation

This workspace is a TypeScript replacement for the Java mobile framework.

## What it supports

- iOS native and Android native execution through Appium 2
- Cucumber feature files
- Page Object Model in TypeScript
- Gherkin-driven code generation for page methods and step definition files
- Optional free AI naming assistance through local Ollama or Hugging Face inference
- Bulk migration utilities for legacy features, Java locators, and Java step catalogs

## Why this replaces Playwright

Playwright is not a full replacement for native iOS and Android automation. This stack uses Appium so the same framework can execute on both platforms.

## Setup

1. Copy `.env.example` to `.env`.
2. Fill in device, app, and bundle/package values.
3. Install dependencies:

```bash
npm install
```

## Run tests

```bash
npm run test:android
npm run test:ios
```

Codegen onboarding shortcuts:

```bash
npm run test:codegen:onboarding:ios
npm run test:codegen:onboarding:android
```

## Reports

Every WebdriverIO run now generates:

- Extent-style detailed HTML: `artifacts/reports/extent-report.html`
- HTML summary report: `artifacts/reports/html-report.html`
- Allure raw results: `artifacts/allure-results`

Generate the rendered Allure HTML report:

```bash
npm run report:allure:generate
```

Open the generated Allure report:

```bash
npm run report:allure:open
```

Rendered Allure output is written to `artifacts/allure-report`.

## Generate page logic and step definitions from Gherkin

Offline deterministic generation:

```bash
npm run generate:steps -- ./features/sample-login.feature
```

Free AI-assisted generation:

```bash
AI_PROVIDER=ollama OLLAMA_MODEL=llama3.1:8b npm run generate:steps -- ./features/sample-login.feature
```

or

```bash
AI_PROVIDER=huggingface HUGGINGFACE_API_TOKEN=your_token npm run generate:steps -- ./features/sample-login.feature
```

The generator creates:

- `src/pages/generated/<feature>.page.ts`
- `src/steps/generated/<feature>.steps.ts`

These files contain the base logic stubs and matching step definitions for the Gherkin steps you wrote.

## Reuse the existing Java assets

Import all legacy Gherkin files and generate TypeScript scaffolds:

```bash
npm run migrate:features
```

Generate TypeScript selector registries from the Java `@FindBy` locator classes:

```bash
npm run migrate:locators
```

Extract the existing Java step definitions into a searchable JSON catalog:

```bash
npm run migrate:steps-catalog
```

Run the full migration flow:

```bash
npm run migrate:all
```

Migration outputs:

- `features/legacy/*` for imported feature files
- `src/pages/generated/*` for generated page object stubs
- `src/steps/generated/*` for generated step definitions
- `src/selectors/generated/*` for converted locator registries
- `src/migration/generated/java-step-catalog.json` for the Java step inventory

Current migration status:

- 96 legacy feature files imported
- 94 feature files converted to TypeScript scaffolds
- 266 Java step definitions cataloged
- 2 malformed legacy features skipped: `iomd_features/cigna.feature` and `iomd_features/colourpopup.feature`
