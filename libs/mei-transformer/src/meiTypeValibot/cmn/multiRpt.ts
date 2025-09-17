import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a multi-measure repeat.
 * @see https://music-encoding.org/guidelines/v5/elements/multiRpt.html
 */
export const MultiRptSchema = AnythingObjectSchema; // TODO: implement element

export type MultiRptData = v.InferOutput<typeof MultiRptSchema>;
