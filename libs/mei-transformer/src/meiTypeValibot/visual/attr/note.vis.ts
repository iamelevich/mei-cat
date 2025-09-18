import * as v from "valibot";

/**
 * Attributes for note.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.vis.html
 */
export const AttrNoteVisSchema = v.object({
  // TODO: Add note.vis attributes
});

export type AttrNoteVisData = v.InferOutput<typeof AttrNoteVisSchema>;
