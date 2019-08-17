import { WebAPIPerson } from "./type";
import { createWebAPIObject } from "../object";

export * from "./type";

export function createWebAPIPerson<T extends string = string>(identifier: string, name: string): WebAPIPerson {
  return {
    ...createWebAPIObject("Person", identifier),
    name
  };
}
