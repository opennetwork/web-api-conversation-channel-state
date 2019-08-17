import { WebAPIObject } from "../object";
import { WebAPIPerson } from "../person";
import { ImageObject, AudioObject, VideoObject, Text } from "schema-dts";
import { Type } from "../type";
// We can infer typing's if we wanted to... this doesn't belong here though
// ["auditory", "visual"] | ["auditory"] | ["textual", "visual"] | ["textual", "auditory", "visual"]
export interface WebAPICommentMediaBase extends WebAPIObject {
  // Its either going to be one of:
  // - One of visual, textual, auditory
  // - auditory & visual, aka Video with sound, no captions
  // - textual & visual, aka image with alt
  // - textual & auditory & visual, aka video with sound and captions
  creator: WebAPIPerson;
  accessMode: ("visual" | "textual" | "auditory")[];
  text?: Text;
  image?: ImageObject;
  audio?: AudioObject;
  video?: VideoObject;
}

export interface WebAPIComment extends Type, WebAPICommentMediaBase {
  "@type": "Comment";
}

export interface WebAPICommentParentBase extends WebAPICommentMediaBase {
  comment: WebAPICommentMediaBase[];
}

export interface WebAPICommentParent extends WebAPIComment, WebAPICommentParentBase {
  "@type": "Comment";
}
