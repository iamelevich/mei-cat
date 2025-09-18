import * as v from "valibot";

/**
 * Attributes for ambitus note logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambNote.log.html
 */
export const AttrAmbNoteLogSchema = v.object({
  // TODO: Add ambitus note logging attributes
});

export type AttrAmbNoteLogData = v.InferOutput<typeof AttrAmbNoteLogSchema>;
