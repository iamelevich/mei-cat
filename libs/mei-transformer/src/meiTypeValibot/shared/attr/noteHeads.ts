import * as v from "valibot";

/**
 * Attributes for note heads.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.noteHeads.html
 */
export const AttrNoteHeadsSchema = v.object({
  // TODO: Add note heads attributes
});

export type AttrNoteHeadsData = v.InferOutput<typeof AttrNoteHeadsSchema>;
