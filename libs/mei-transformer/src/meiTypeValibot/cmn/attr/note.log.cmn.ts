import * as v from "valibot";

/**
 * Attributes for note.log.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.log.cmn.html
 */
export const AttrNoteLogCmnSchema = v.object({
	// TODO: Add note.log.cmn attributes
});

export type AttrNoteLogCmnData = v.InferOutput<typeof AttrNoteLogCmnSchema>;
