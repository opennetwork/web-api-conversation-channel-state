import { WebAPICreativeWork } from "./type";
import { createWebAPIObject } from "../object";
import { WebAPIPerson } from "../person";

export * from "./type";

export function createWebAPICreativeWork(identifier: string, creator: WebAPIPerson): WebAPICreativeWork {
  return {
    ...createWebAPIObject("CreativeWork", identifier),
    creator
  };
}
