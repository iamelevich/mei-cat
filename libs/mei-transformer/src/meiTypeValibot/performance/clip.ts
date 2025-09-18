import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * clip element.
 * @see https://music-encoding.org/guidelines/v5/elements/clip.html
 */
export const ClipSchema = AnythingObjectSchema; // TODO: implement element

export type ClipData = v.InferOutput<typeof ClipSchema>;
