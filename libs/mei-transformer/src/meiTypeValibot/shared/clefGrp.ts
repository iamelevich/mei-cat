import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups clef elements.
 * @see https://music-encoding.org/guidelines/v5/elements/clefGrp.html
 */
export const ClefGrpSchema = AnythingObjectSchema; // TODO: implement element

export type ClefGrpData = v.InferOutput<typeof ClefGrpSchema>;
