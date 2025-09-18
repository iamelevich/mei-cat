import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * syllable element.
 * @see https://music-encoding.org/guidelines/v5/elements/syllable.html
 */
export const SyllableSchema = AnythingObjectSchema; // TODO: implement element

export type SyllableData = v.InferOutput<typeof SyllableSchema>;
