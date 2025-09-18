import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the locus group of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
 */
export const LocusGrpSchema = AnythingObjectSchema; // TODO: implement element

export type LocusGrpData = v.InferOutput<typeof LocusGrpSchema>;
