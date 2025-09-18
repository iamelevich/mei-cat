import type * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a measure repeat 2.
 * @see https://music-encoding.org/guidelines/v5/elements/mRpt2.html
 */
export const MRpt2Schema = AnythingObjectSchema; // TODO: implement element

export type MRpt2Data = v.InferOutput<typeof MRpt2Schema>;
