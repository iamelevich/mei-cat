import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the decoration of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/decoNote.html
 */
export const DecoNoteSchema = AnythingObjectSchema; // TODO: implement element

export type DecoNoteData = v.InferOutput<typeof DecoNoteSchema>;
