export interface SelectorDefinition {
  strategy: "xpath" | "accessibility id" | "id" | "class name" | "name" | "css selector";
  value: string;
}

export type SelectorRegistry = Record<string, SelectorDefinition>;
