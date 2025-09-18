import type * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a meter signature.
 * @see https://music-encoding.org/guidelines/v5/elements/meterSig.html
 */
export const MeterSigSchema = AnythingObjectSchema; // TODO: implement element

export type MeterSigData = v.InferOutput<typeof MeterSigSchema>;
