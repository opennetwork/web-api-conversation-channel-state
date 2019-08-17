import { WebAPIComment, WebAPICommentParent } from "./type";
import { createWebAPIObject } from "../object";
import { WebAPIPerson } from "../person";

export * from "./type";

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
