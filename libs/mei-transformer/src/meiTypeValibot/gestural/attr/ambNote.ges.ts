import * as v from "valibot";

/**
 * Attributes for ambNote.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambNote.ges.html
 */
export const AttrAmbNoteGesSchema = v.object({
  // TODO: Add ambNote.ges attributes
});

export type AttrAmbNoteGesData = v.InferOutput<typeof AttrAmbNoteGesSchema>;
