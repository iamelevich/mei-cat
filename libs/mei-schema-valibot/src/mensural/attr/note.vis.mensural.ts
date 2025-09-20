import * as v from "valibot";

/**
 * Visual domain attributes in the Mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.vis.mensural.html
 */
export const AttrNoteVisMensuralSchema = v.object({
	// Direct attributes
	/**
	 * Indicates this element’s participation in a ligature.
	 */
	"@lig": v.optional(v.string()),
});

export type AttrNoteVisMensuralData = v.InferOutput<
	typeof AttrNoteVisMensuralSchema
>;
