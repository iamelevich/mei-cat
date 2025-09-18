import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the name of a speaker.
 * @see https://music-encoding.org/guidelines/v5/elements/speaker.html
 */
export const SpeakerSchema = AnythingObjectSchema; // TODO: implement element

export type SpeakerData = v.InferOutput<typeof SpeakerSchema>;
