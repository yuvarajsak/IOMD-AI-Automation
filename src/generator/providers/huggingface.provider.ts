import { env } from "../../config/env";
import type { AiProvider, GenerationPayload } from "../types";

export class HuggingFaceProvider implements AiProvider {
  readonly name = "huggingface";

  async generate(payload: GenerationPayload): Promise<GenerationPayload> {
    if (!env.ai.huggingFaceApiToken) {
      throw new Error("HUGGINGFACE_API_TOKEN is required for the Hugging Face provider.");
    }

    const prompt = [
      "Return valid JSON only.",
      "Task: improve TypeScript method names for mobile automation steps.",
      `Feature: ${payload.featureTitle}`,
      `Methods: ${JSON.stringify(payload.steps.map((step) => step.methodName))}`,
      "Output format: {\"renames\":{\"originalMethodName\":\"betterMethodName\"}}"
    ].join("\n");

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${env.ai.huggingFaceModel}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.ai.huggingFaceApiToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 200
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Hugging Face request failed with status ${response.status}`);
    }

    const json = (await response.json()) as Array<{ generated_text?: string }> | { generated_text?: string };
    const text = Array.isArray(json) ? json[0]?.generated_text ?? "" : json.generated_text ?? "";
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");

    if (start === -1 || end === -1) {
      return payload;
    }

    const parsed = JSON.parse(text.slice(start, end + 1)) as { renames?: Record<string, string> };
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
