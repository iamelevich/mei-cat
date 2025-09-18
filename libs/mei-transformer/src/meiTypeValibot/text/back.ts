import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains any appendixes, advertisements, indexes, etc. following the main body of a musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/back.html
 */
export const BackSchema = AnythingObjectSchema; // TODO: implement element

export type BackData = v.InferOutput<typeof BackSchema>;
