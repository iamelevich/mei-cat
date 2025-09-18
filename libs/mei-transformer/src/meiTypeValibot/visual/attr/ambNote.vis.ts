import * as v from "valibot";

/**
 * Attributes for ambNote.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambNote.vis.html
 */
export const AttrAmbNoteVisSchema = v.object({
  // TODO: Add ambNote.vis attributes
});

export type AttrAmbNoteVisData = v.InferOutput<typeof AttrAmbNoteVisSchema>;
