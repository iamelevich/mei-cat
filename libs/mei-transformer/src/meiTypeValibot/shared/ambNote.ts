import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a single note in an ambitus.
 * @see https://music-encoding.org/guidelines/v5/elements/ambNote.html
 */
export const AmbNoteSchema = AnythingObjectSchema; // TODO: implement element

export type AmbNoteData = v.InferOutput<typeof AmbNoteSchema>;
