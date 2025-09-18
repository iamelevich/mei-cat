import * as v from "valibot";

/**
 * Attributes for note.ges.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.ges.mensural.html
 */
export const AttrNoteGesMensuralSchema = v.object({
  // TODO: Add note.ges.mensural attributes
});

export type AttrNoteGesMensuralData = v.InferOutput<typeof AttrNoteGesMensuralSchema>;
