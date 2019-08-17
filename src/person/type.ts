import { WebAPIObject } from "../object";
import { Text, ImageObject, Person } from "schema-dts";

export interface WebAPIPersonBase extends WebAPIObject {
  name: Text;
  alternateName?: Text;
  image?: ImageObject;
}

export type WebAPIPerson = Person & WebAPIPersonBase;
