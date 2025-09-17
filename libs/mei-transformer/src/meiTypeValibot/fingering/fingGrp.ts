import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups fingering elements.
 * @see https://music-encoding.org/guidelines/v5/elements/fingGrp.html
 */
export const FingGrpSchema = AnythingObjectSchema; // TODO: implement element

export type FingGrpData = v.InferOutput<typeof FingGrpSchema>;
