import { WebAPIPerson } from "./person";
import { WebAPIConversation } from "./conversation";
import { WebAPIObject } from "./object";
import { CreativeWork, WebAPI, Text } from "schema-dts";

export interface WebAPIEntityBase extends WebAPIObject {
  name: Text;
  audience: WebAPIPerson[];
  hasPart: WebAPIConversation[];
}

export type WebAPIEntity = CreativeWork & WebAPIEntityBase;

export interface WebAPIStateBase {
  name: string;
  mainEntityOfPage: WebAPIEntity;
}

export type WebAPIState = WebAPI & WebAPIStateBase;
