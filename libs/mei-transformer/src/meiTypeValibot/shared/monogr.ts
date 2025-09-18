import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains bibliographic information for a single monograph.
 * @see https://music-encoding.org/guidelines/v5/elements/monogr.html
 */
export const MonogrSchema = AnythingObjectSchema; // TODO: implement element

export type MonogrData = v.InferOutput<typeof MonogrSchema>;
