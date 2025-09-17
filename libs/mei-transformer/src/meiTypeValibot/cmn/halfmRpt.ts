import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a half measure repeat.
 * @see https://music-encoding.org/guidelines/v5/elements/halfmRpt.html
 */
export const HalfmRptSchema = AnythingObjectSchema; // TODO: implement element

export type HalfmRptData = v.InferOutput<typeof HalfmRptSchema>;
