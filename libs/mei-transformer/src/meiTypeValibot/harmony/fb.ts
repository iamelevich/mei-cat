import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a figured bass.
 * @see https://music-encoding.org/guidelines/v5/elements/fb.html
 */
export const FbSchema = AnythingObjectSchema; // TODO: implement element

export type FbData = v.InferOutput<typeof FbSchema>;
