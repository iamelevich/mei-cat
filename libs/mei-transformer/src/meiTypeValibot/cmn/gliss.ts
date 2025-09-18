import type * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a glissando.
 * @see https://music-encoding.org/guidelines/v5/elements/gliss.html
 */
export const GlissSchema = AnythingObjectSchema; // TODO: implement element

export type GlissData = v.InferOutput<typeof GlissSchema>;
