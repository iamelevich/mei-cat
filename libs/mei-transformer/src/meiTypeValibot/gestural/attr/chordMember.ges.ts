import * as v from "valibot";

/**
 * Attributes for chordMember.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordMember.ges.html
 */
export const AttrChordMemberGesSchema = v.object({
  // TODO: Add chordMember.ges attributes
});

export type AttrChordMemberGesData = v.InferOutput<typeof AttrChordMemberGesSchema>;
