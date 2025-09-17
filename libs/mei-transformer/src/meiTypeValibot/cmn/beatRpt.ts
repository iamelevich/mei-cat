import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a beat repeat.
 * @see https://music-encoding.org/guidelines/v5/elements/beatRpt.html
 */
export const BeatRptSchema = AnythingObjectSchema; // TODO: implement element

export type BeatRptData = v.InferOutput<typeof BeatRptSchema>;
