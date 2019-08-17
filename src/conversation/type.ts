import { WebAPICreativeWorkBase } from "../creative-work";
import { WebAPIPerson } from "../person";
import { WebAPIComment } from "../comment";
import { Thing, Conversation, Text } from "schema-dts";

export interface WebAPIConversationBase extends WebAPICreativeWorkBase {
  name: Text;
  about: Thing;
  audience: WebAPIPerson[];
  hasPart: WebAPIComment[];
}

export type WebAPIConversation = Conversation & WebAPIConversationBase;
