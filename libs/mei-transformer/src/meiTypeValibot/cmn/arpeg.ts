import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates that the notes of a chord are to be performed successively rather than simultaneously.
 * @see https://music-encoding.org/guidelines/v5/elements/arpeg.html
 */
export const ArpegSchema = AnythingObjectSchema; // TODO: implement element

export type ArpegData = v.InferOutput<typeof ArpegSchema>;
