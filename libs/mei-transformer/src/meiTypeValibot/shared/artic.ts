import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * An indication of how to perform a note or chord.
 * @see https://music-encoding.org/guidelines/v5/elements/artic.html
 */
export const ArticSchema = AnythingObjectSchema; // TODO: implement element

export type ArticData = v.InferOutput<typeof ArticSchema>;
