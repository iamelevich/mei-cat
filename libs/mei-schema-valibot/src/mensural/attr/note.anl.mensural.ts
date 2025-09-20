import * as v from "valibot";

/**
 * Analytical domain attributes in the Mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.anl.mensural.html
 */
export const AttrNoteAnlMensuralSchema = v.object({
	// No attributes in MEI schema
});

export type AttrNoteAnlMensuralData = v.InferOutput<
	typeof AttrNoteAnlMensuralSchema
>;
