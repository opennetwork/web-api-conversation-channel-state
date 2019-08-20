import { WebAPIObject } from "../object";
import { WebAPIPerson } from "../person";
import { ImageObject, AudioObject, VideoObject, Text } from "schema-dts";
import { Type } from "../type";

export type AccessModeVisual = "visual";
export type AccessModeTextual = "textual";
export type AccessModeAuditory = "auditory";
export type AccessMode = AccessModeVisual | AccessModeTextual | AccessModeAuditory;

export type AccessModeVideo = [AccessModeVisual, AccessModeAuditory];
export type AccessModeVideoCaptioned = [AccessModeVisual, AccessModeAuditory, AccessModeTextual];
export type AccessModeImage = [AccessModeVisual];
export type AccessModeImageCaptioned = [AccessModeVisual, AccessModeTextual];

export interface WebAPICommentMediaBase extends WebAPIObject {
  // Its either going to be one of:
  // - One of visual, textual, auditory
  // - auditory & visual, aka Video with sound, no captions
  // - textual & visual, aka image with alt
  // - textual & auditory & visual, aka video with sound and captions
  creator: WebAPIPerson;
  accessMode: AccessMode[];
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
