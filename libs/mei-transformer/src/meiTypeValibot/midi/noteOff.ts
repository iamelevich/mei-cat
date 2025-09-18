import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * noteOff element.
 * @see https://music-encoding.org/guidelines/v5/elements/noteOff.html
 */
export const NoteOffSchema = AnythingObjectSchema; // TODO: implement element

export type NoteOffData = v.InferOutput<typeof NoteOffSchema>;
