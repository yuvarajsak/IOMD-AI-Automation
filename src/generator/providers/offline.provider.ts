import type { AiProvider, GenerationPayload } from "../types";

export class OfflineProvider implements AiProvider {
  readonly name = "offline";

  async generate(payload: GenerationPayload): Promise<GenerationPayload> {
    return payload;
  }
}
