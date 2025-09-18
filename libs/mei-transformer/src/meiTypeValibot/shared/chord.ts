import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A simultaneous sounding of two or more notes in the same layer with the same duration.
 * @see https://music-encoding.org/guidelines/v5/elements/chord.html
 */
export const ChordSchema = AnythingObjectSchema; // TODO: implement element

export type ChordData = v.InferOutput<typeof ChordSchema>;
