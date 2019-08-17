import { Type } from "./type";

export * from "./type";

export function createType<T extends string = string>(type: T): Type<T> {
  return {
    "@type": type
  };
}
