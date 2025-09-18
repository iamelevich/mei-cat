import * as v from "valibot";

/**
 * Attributes for note.anl.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.anl.mensural.html
 */
export const AttrNoteAnlMensuralSchema = v.object({
  // TODO: Add note.anl.mensural attributes
});

export type AttrNoteAnlMensuralData = v.InferOutput<typeof AttrNoteAnlMensuralSchema>;
