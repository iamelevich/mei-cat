import * as v from "valibot";
import { StandardTagSchema } from "../common";

/**
 * Neume notation can be thought of as "neumed text". Therefore, the syllable element provides high-level organization in this repertoire.
 * @see https://music-encoding.org/guidelines/v5/elements/syllable.html
 */
export const SyllableSchema = v.object({
  ...StandardTagSchema.entries,
});

export type SyllableData = v.InferOutput<typeof SyllableSchema>;
