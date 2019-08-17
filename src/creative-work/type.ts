import { WebAPIObject } from "../object";
import { WebAPIPerson } from "../person";
import { CreativeWork } from "schema-dts";

export interface WebAPICreativeWorkBase extends WebAPIObject {
  creator: WebAPIPerson;
}

export type WebAPICreativeWork = CreativeWork & WebAPICreativeWorkBase;
