import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * verse element.
 * @see https://music-encoding.org/guidelines/v5/elements/verse.html
 */
export const VerseSchema = AnythingObjectSchema; // TODO: implement element

export type VerseData = v.InferOutput<typeof VerseSchema>;
