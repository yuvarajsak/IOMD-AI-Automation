export interface StepDefinitionModel {
  keyword: string;
  text: string;
  expression: string;
  methodName: string;
  parameters: string[];
  stepKey: string;
}

export interface GenerationPayload {
  featureTitle: string;
  pageClassName: string;
  pageFileName: string;
  stepsFileName: string;
  featureFilePath: string;
  steps: StepDefinitionModel[];
}

export interface AiProvider {
  name: string;
  generate(payload: GenerationPayload): Promise<GenerationPayload>;
}
