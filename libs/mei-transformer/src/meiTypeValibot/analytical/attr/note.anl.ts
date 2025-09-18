import * as v from "valibot";

/**
 * Attributes for note.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.anl.html
 */
export const AttrNoteAnlSchema = v.object({
  // TODO: Add note.anl attributes
});

export type AttrNoteAnlData = v.InferOutput<typeof AttrNoteAnlSchema>;
