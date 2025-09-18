import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the locus of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
 */
export const LocusSchema = AnythingObjectSchema; // TODO: implement element

export type LocusData = v.InferOutput<typeof LocusSchema>;
