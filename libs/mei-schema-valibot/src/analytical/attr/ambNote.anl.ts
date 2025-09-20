import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambNote.anl.html
 */
export const AttrAmbNoteAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAmbNoteAnlData = v.InferOutput<typeof AttrAmbNoteAnlSchema>;
