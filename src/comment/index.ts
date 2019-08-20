import { WebAPIComment, WebAPICommentParent, WebAPICommentResponseAction, WebAPICommentResponseInteractionCounter } from "./type";
import { createWebAPIObject } from "../object";
import { WebAPIPerson } from "../person";
import { createType } from "../type";

export * from "./type";

export function createWebAPICommentResponseAction(agent: WebAPIPerson[], name: string): WebAPICommentResponseAction {
  return {
    ...createType("InteractAction"),
    agent,
    name
  };
}

export function createWebAPICommentResponseInteractionCounter(interactionType: WebAPICommentResponseAction): WebAPICommentResponseInteractionCounter {
  return {
    ...createType("InteractionCounter"),
    interactionType,
    userInteractionCount: 0
  };
}

export function createWebAPIComment(identifier: string, creator: WebAPIPerson, accessMode: WebAPIComment["accessMode"]): WebAPIComment {
  return {
    ...createWebAPIObject("Comment", identifier),
    creator,
    accessMode
  };
}

export function createWebAPICommentParent(identifier: string, creator: WebAPIPerson, accessMode: WebAPIComment["accessMode"]): WebAPICommentParent {
  return {
    ...createWebAPIComment(identifier, creator, accessMode),
    comment: []
  };
}
