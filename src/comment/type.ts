import { WebAPIObject } from "../object";
import { WebAPIPerson } from "../person";
import { ImageObject, AudioObject, VideoObject, Text, MediaObject, URL } from "schema-dts";
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
  image?: ImageObject | ImageObject[];
  audio?: AudioObject | AudioObject[];
  video?: VideoObject | VideoObject[];
  encoding?: MediaObject;
  encodingFormat?: Text;
  url?: URL;
  description?: Text;
  name?: Text;
  headline?: Text;
  alternativeHeadline?: Text;
}

export interface WebAPIComment extends Type, WebAPICommentMediaBase {
  "@type": "Comment";
  hasPart?: WebAPIComment[];
}

export interface WebAPICommentParent extends WebAPIComment {
  "@type": "Comment";
  comment: WebAPICommentMediaBase[];
}
