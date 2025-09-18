import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * noteOn element.
 * @see https://music-encoding.org/guidelines/v5/elements/noteOn.html
 */
export const NoteOnSchema = AnythingObjectSchema; // TODO: implement element

export type NoteOnData = v.InferOutput<typeof NoteOnSchema>;
