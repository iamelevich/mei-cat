import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a harp pedal marking.
 * @see https://music-encoding.org/guidelines/v5/elements/harpPedal.html
 */
export const HarpPedalSchema = AnythingObjectSchema; // TODO: implement element

export type HarpPedalData = v.InferOutput<typeof HarpPedalSchema>;
