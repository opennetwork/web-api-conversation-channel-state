import { WebAPIConversation, WebAPIConversationBase } from "./type";
import { createWebAPIObject } from "../object";
import { WebAPIPerson } from "../person";
import { Thing } from "schema-dts";

export * from "./type";

function isWebAPIConversation(conversation: WebAPIConversationBase): conversation is WebAPIConversation {
  return conversation["@type"] === "Conversation";
}

function createWebAPIConversationBase(identifier: string, name: string, about: Thing, creator: WebAPIPerson): WebAPIConversationBase {
  return {
    ...createWebAPIObject("Conversation", identifier),
    creator,
    name,
    about,
    audience: [],
    hasPart: []
  };
}

// If we map directly to WebAPIConversation without as, we get "union to complex", so this is a little hack
export function createWebAPIConversation(identifier: string, name: string, about: Thing, creator: WebAPIPerson): WebAPIConversation {
  const base: WebAPIConversationBase = createWebAPIConversationBase(identifier, name, about, creator);
  // Since we can't have compile time type checking, we'll do that extra step using runtime
  if (!isWebAPIConversation(base)) {
    throw new Error();
  }
  return base;
}
