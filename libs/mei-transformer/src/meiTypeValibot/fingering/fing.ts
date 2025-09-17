import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates fingering on a fretted instrument.
 * @see https://music-encoding.org/guidelines/v5/elements/fing.html
 */
export const FingSchema = AnythingObjectSchema; // TODO: implement element

export type FingData = v.InferOutput<typeof FingSchema>;
