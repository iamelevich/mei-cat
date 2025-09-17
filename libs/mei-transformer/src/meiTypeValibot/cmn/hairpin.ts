import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a hairpin dynamic marking.
 * @see https://music-encoding.org/guidelines/v5/elements/hairpin.html
 */
export const HairpinSchema = AnythingObjectSchema; // TODO: implement element

export type HairpinData = v.InferOutput<typeof HairpinSchema>;
