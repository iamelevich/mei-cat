import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * An indication of the tempo of a musical work.
 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
 */
export const TempoSchema = AnythingObjectSchema; // TODO: implement element

export type TempoData = v.InferOutput<typeof TempoSchema>;
