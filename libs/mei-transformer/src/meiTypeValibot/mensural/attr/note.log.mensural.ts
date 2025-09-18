import * as v from "valibot";

/**
 * Attributes for note.log.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.log.mensural.html
 */
export const AttrNoteLogMensuralSchema = v.object({
  // TODO: Add note.log.mensural attributes
});

export type AttrNoteLogMensuralData = v.InferOutput<typeof AttrNoteLogMensuralSchema>;
