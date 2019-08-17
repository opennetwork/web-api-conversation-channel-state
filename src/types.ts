import { WebAPIPerson } from "./person";
import { WebAPIConversation } from "./conversation";
import { WebAPIObject } from "./object";
import { CreativeWork, WebAPI, Text } from "schema-dts";
import { Type } from "./type";

export interface WebAPIEntityBase extends WebAPIObject {
  name: Text;
  audience: WebAPIPerson[];
  hasPart: WebAPIConversation[];
}

export interface WebAPIEntity extends Type, WebAPIEntityBase {
  "@type": "CreativeWork";
}

export interface WebAPIStateBase {
  name: string;
  mainEntityOfPage: WebAPIEntity;
}

export interface WebAPIState extends Type, WebAPIStateBase {
  "@type": "WebAPI";
}
