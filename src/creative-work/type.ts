import { WebAPIObject } from "../object";
import { WebAPIPerson } from "../person";
import { CreativeWork } from "schema-dts";
import { Type } from "../type";

export interface WebAPICreativeWorkBase extends WebAPIObject {
  creator: WebAPIPerson;
}

export interface WebAPICreativeWork extends Type, WebAPICreativeWorkBase {
  "@type": "CreativeWork";
}
