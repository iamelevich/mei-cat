import type * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a repeat mark.
 * @see https://music-encoding.org/guidelines/v5/elements/repeatMark.html
 */
export const RepeatMarkSchema = AnythingObjectSchema; // TODO: implement element

export type RepeatMarkData = v.InferOutput<typeof RepeatMarkSchema>;
