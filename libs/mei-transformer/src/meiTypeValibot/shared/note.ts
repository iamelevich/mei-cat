import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A single pitched event.
 * @see https://music-encoding.org/guidelines/v5/elements/note.html
 */
export const NoteSchema = AnythingObjectSchema; // TODO: implement element

export type NoteData = v.InferOutput<typeof NoteSchema>;
