import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Marks the beginning of a column break.
 * @see https://music-encoding.org/guidelines/v5/elements/cb.html
 */
export const CbSchema = AnythingObjectSchema; // TODO: implement element

export type CbData = v.InferOutput<typeof CbSchema>;
