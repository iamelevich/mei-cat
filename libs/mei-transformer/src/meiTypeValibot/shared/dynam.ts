import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * An indication of the volume of a note, phrase, or section of music.
 * @see https://music-encoding.org/guidelines/v5/elements/dynam.html
 */
export const DynamSchema = AnythingObjectSchema; // TODO: implement element

export type DynamData = v.InferOutput<typeof DynamSchema>;
