import * as v from "valibot";

/**
 * Attributes for note.vis.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.vis.cmn.html
 */
export const AttrNoteVisCmnSchema = v.object({
	// TODO: Add note.vis.cmn attributes
});

export type AttrNoteVisCmnData = v.InferOutput<typeof AttrNoteVisCmnSchema>;
