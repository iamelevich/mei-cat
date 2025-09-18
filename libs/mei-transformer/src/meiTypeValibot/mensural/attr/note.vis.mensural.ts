import * as v from "valibot";

/**
 * Attributes for note.vis.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.vis.mensural.html
 */
export const AttrNoteVisMensuralSchema = v.object({
  // TODO: Add note.vis.mensural attributes
});

export type AttrNoteVisMensuralData = v.InferOutput<typeof AttrNoteVisMensuralSchema>;
