import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a point of musical rest, often corresponding to a breath mark.
 * @see https://music-encoding.org/guidelines/v5/elements/breath.html
 */
export const BreathSchema = AnythingObjectSchema; // TODO: implement element

export type BreathData = v.InferOutput<typeof BreathSchema>;
