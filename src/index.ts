import {
  WebAPIState,
  WebAPIEntity
} from "./types";
import { createWebAPIObject } from "./object";

export * from "./comment";
export * from "./conversation";
export * from "./creative-work";
export * from "./object";
export * from "./person";
export * from "./type";
export * from "./types";

export function createEntity(identifier: string, name: string): WebAPIEntity {
  return {
    ...createWebAPIObject("CreativeWork", identifier),
    name: name,
    audience: [],
    hasPart: []
  };
}

export function create(name: string, entity: WebAPIEntity): WebAPIState {
  return {
    "@type": "WebAPI",
    name: name,
    mainEntityOfPage: entity
  };
}
