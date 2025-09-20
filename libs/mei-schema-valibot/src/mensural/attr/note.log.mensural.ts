import * as v from "valibot";

/**
 * Logical domain attributes in the Mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.log.mensural.html
 */
export const AttrNoteLogMensuralSchema = v.object({
	// No attributes in MEI schema
});

export type AttrNoteLogMensuralData = v.InferOutput<
	typeof AttrNoteLogMensuralSchema
>;
