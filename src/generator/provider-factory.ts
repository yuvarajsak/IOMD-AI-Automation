import { env } from "../config/env";
import type { AiProvider } from "./types";
import { OfflineProvider } from "./providers/offline.provider";
import { OllamaProvider } from "./providers/ollama.provider";
import { HuggingFaceProvider } from "./providers/huggingface.provider";

export const createProvider = (): AiProvider => {
  switch (env.ai.provider.toLowerCase()) {
    case "ollama":
      return new OllamaProvider();
    case "huggingface":
      return new HuggingFaceProvider();
    default:
      return new OfflineProvider();
  }
};
