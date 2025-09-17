import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups meter signature elements.
 * @see https://music-encoding.org/guidelines/v5/elements/meterSigGrp.html
 */
export const MeterSigGrpSchema = AnythingObjectSchema; // TODO: implement element

export type MeterSigGrpData = v.InferOutput<typeof MeterSigGrpSchema>;
