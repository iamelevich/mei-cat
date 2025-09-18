import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the collation of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/collation.html
 */
export const CollationSchema = AnythingObjectSchema; // TODO: implement element

export type CollationData = v.InferOutput<typeof CollationSchema>;
