import type * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a tuplet.
 * @see https://music-encoding.org/guidelines/v5/elements/tuplet.html
 */
export const TupletSchema = AnythingObjectSchema; // TODO: implement element

export type TupletData = v.InferOutput<typeof TupletSchema>;
