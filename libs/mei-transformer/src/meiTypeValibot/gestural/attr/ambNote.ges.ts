import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambNote.ges.html
 */
export const AttrAmbNoteGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAmbNoteGesData = v.InferOutput<typeof AttrAmbNoteGesSchema>;
