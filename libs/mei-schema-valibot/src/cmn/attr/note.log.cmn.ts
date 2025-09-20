import * as v from "valibot";
import { AttrGracedSchema } from "./graced";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.log.cmn.html
 */
export const AttrNoteLogCmnSchema = v.object({
	// Inherited attribute classes
	...AttrGracedSchema.entries,
});

export type AttrNoteLogCmnData = v.InferOutput<typeof AttrNoteLogCmnSchema>;
