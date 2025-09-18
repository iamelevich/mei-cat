import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a chord definition.
 * @see https://music-encoding.org/guidelines/v5/elements/chordDef.html
 */
export const ChordDefSchema = AnythingObjectSchema; // TODO: implement element

export type ChordDefData = v.InferOutput<typeof ChordDefSchema>;
