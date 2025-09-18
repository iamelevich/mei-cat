import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * midi element.
 * @see https://music-encoding.org/guidelines/v5/elements/midi.html
 */
export const MidiSchema = AnythingObjectSchema; // TODO: implement element

export type MidiData = v.InferOutput<typeof MidiSchema>;
