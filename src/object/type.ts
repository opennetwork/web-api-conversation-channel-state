import { Type } from "../type";
import { DateTime, Text } from "schema-dts";

export interface WebAPIObject<T extends string = string> extends Type<T> {
  identifier: Text;
  dateCreated: DateTime;
  dateModified: DateTime;
}
