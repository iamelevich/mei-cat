import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the script of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/scriptNote.html
 */
export const ScriptNoteSchema = AnythingObjectSchema; // TODO: implement element

export type ScriptNoteData = v.InferOutput<typeof ScriptNoteSchema>;
