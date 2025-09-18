import * as v from "valibot";

/**
 * Attributes for chordMember.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordMember.vis.html
 */
export const AttrChordMemberVisSchema = v.object({
  // TODO: Add chordMember.vis attributes
});

export type AttrChordMemberVisData = v.InferOutput<typeof AttrChordMemberVisSchema>;
