import * as v from "valibot";

/**
 * Attributes for note.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.ges.html
 */
export const AttrNoteGesSchema = v.object({
  // TODO: Add note.ges attributes
});

export type AttrNoteGesData = v.InferOutput<typeof AttrNoteGesSchema>;
