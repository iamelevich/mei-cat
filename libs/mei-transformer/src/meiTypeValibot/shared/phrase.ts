import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a phrase.
 * @see https://music-encoding.org/guidelines/v5/elements/phrase.html
 */
export const PhraseSchema = AnythingObjectSchema; // TODO: implement element

export type PhraseData = v.InferOutput<typeof PhraseSchema>;
