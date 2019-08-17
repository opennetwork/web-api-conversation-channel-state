import { WebAPIObject } from "./type";
import { createType } from "../type";

export * from "./type";

export function createWebAPIObject<T extends string = string>(type: T, identifier: string, now: string = new Date().toISOString()): WebAPIObject<T> {
  return {
    ...createType(type),
    identifier,
    dateCreated: now,
    dateModified: now
  };
}
