import * as v from "valibot";

/**
 * Attributes for note.anl.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.anl.cmn.html
 */
export const AttrNoteAnlCmnSchema = v.object({
  // TODO: Add note.anl.cmn attributes
});

export type AttrNoteAnlCmnData = v.InferOutput<typeof AttrNoteAnlCmnSchema>;
