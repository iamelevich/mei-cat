import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a pedal marking.
 * @see https://music-encoding.org/guidelines/v5/elements/pedal.html
 */
export const PedalSchema = AnythingObjectSchema; // TODO: implement element

export type PedalData = v.InferOutput<typeof PedalSchema>;
