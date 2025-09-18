import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the type of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/typeNote.html
 */
export const TypeNoteSchema = AnythingObjectSchema; // TODO: implement element

export type TypeNoteData = v.InferOutput<typeof TypeNoteSchema>;
