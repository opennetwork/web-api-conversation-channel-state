import { WebAPIObject } from "../object";
import { Text, ImageObject, Person } from "schema-dts";
import { Type } from "../type";

export interface WebAPIPersonBase extends WebAPIObject {
  name: Text;
  alternateName?: Text;
  image?: ImageObject;
}

export interface WebAPIPerson extends Type, WebAPIPersonBase {
  "@type": "Person";
}
