import { BasePage } from "../base.page";

export class GeneratedPage extends BasePage {
  constructor() {
    super("GeneratedPage");
  }

  async runStep(stepKey: string, parameters: Record<string, string>): Promise<void> {
    switch (stepKey) {
      default:
        throw new Error(
          `No generated implementation exists for "${stepKey}" in ${this.constructor.name}. Parameters: ${JSON.stringify(parameters)}`
        );
    }
  }
}

export const generatedPage = new GeneratedPage();
