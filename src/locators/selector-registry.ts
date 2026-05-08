import type { SelectorDefinition } from "../types/selector";

export const selectorToString = (selector: SelectorDefinition): string => {
  switch (selector.strategy) {
    case "accessibility id":
      return `~${selector.value}`;
    case "id":
      return `id=${selector.value}`;
    case "class name":
      return selector.value;
    case "name":
      return selector.value;
    case "css selector":
      return selector.value;
    case "xpath":
    default:
      return selector.value;
  }
};
