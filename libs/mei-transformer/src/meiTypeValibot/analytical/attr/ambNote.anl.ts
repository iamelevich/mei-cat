import * as v from "valibot";

/**
 * Attributes for ambNote.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambNote.anl.html
 */
export const AttrAmbNoteAnlSchema = v.object({
  // TODO: Add ambNote.anl attributes
});

export type AttrAmbNoteAnlData = v.InferOutput<typeof AttrAmbNoteAnlSchema>;
