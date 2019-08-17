import { WebAPIConversation, WebAPIConversationBase } from "./type";
import { createWebAPIObject } from "../object";
import { WebAPIPerson } from "../person";
import { Thing } from "schema-dts";

export * from "./type";

function isWebAPIConversation(conversation: WebAPIConversationBase): conversation is WebAPIConversation {
  return conversation["@type"] === "Conversation";
}

// If we map directly to WebAPIConversation without as, we get "union to complex", so this is a little hack
export function createWebAPIConversation(identifier: string, name: string, about: Thing, creator: WebAPIPerson): WebAPIConversation {
  return {
    ...createWebAPIObject("Conversation", identifier),
    creator,
    name,
    about,
    audience: [],
    hasPart: []
  };
}
