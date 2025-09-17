import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates an octave marking.
 * @see https://music-encoding.org/guidelines/v5/elements/octave.html
 */
export const OctaveSchema = AnythingObjectSchema; // TODO: implement element

export type OctaveData = v.InferOutput<typeof OctaveSchema>;
