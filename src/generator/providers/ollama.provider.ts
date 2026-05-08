import { env } from "../../config/env";
import type { AiProvider, GenerationPayload } from "../types";

export class OllamaProvider implements AiProvider {
  readonly name = "ollama";

  async generate(payload: GenerationPayload): Promise<GenerationPayload> {
    const prompt = [
      "You generate concise mobile automation method names.",
      `Feature: ${payload.featureTitle}`,
      "Return JSON only with shape: {\"renames\":{\"originalMethodName\":\"betterMethodName\"}}",
      `Methods: ${JSON.stringify(payload.steps.map((step) => step.methodName))}`
    ].join("\n");

    const response = await fetch(`${env.ai.ollamaBaseUrl}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: env.ai.ollamaModel,
        stream: false,
        prompt
      })
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed with status ${response.status}`);
    }

    const json = (await response.json()) as { response?: string };
    const raw = json.response?.trim();

    if (!raw) {
      return payload;
    }

    const parsed = JSON.parse(raw) as { renames?: Record<string, string> };
    const renames = parsed.renames ?? {};

    return {
      ...payload,
      steps: payload.steps.map((step) => ({
        ...step,
        methodName: renames[step.methodName] ?? step.methodName
      }))
    };
  }
}
