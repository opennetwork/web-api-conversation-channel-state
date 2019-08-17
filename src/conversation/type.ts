import { WebAPICreativeWorkBase } from "../creative-work";
import { WebAPIPerson } from "../person";
import { WebAPIComment } from "../comment";
import { Thing, Text } from "schema-dts";
import { Type } from "../type";

export interface WebAPIConversationBase extends WebAPICreativeWorkBase {
  name: Text;
  about: Thing;
  audience: WebAPIPerson[];
  hasPart: WebAPIComment[];
}

export interface WebAPIConversation extends Type, WebAPIConversationBase {
  "@type": "Conversation";
}
