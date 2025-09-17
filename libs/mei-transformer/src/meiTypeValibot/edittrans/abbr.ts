import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains an abbreviation of any sort.
 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
 */
export const AbbrSchema = AnythingObjectSchema; // TODO: implement element

export type AbbrData = v.InferOutput<typeof AbbrSchema>;
