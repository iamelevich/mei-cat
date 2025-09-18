import type * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a measure repeat.
 * @see https://music-encoding.org/guidelines/v5/elements/mRpt.html
 */
export const MRptSchema = AnythingObjectSchema; // TODO: implement element

export type MRptData = v.InferOutput<typeof MRptSchema>;
