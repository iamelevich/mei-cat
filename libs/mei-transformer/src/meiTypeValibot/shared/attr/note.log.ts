import * as v from "valibot";

/**
 * Attributes for note logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.log.html
 */
export const AttrNoteLogSchema = v.object({
  // TODO: Add note logging attributes
});

export type AttrNoteLogData = v.InferOutput<typeof AttrNoteLogSchema>;
