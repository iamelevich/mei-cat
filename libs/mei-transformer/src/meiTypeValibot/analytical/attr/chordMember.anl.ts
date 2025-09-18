import * as v from "valibot";

/**
 * Attributes for chordMember.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordMember.anl.html
 */
export const AttrChordMemberAnlSchema = v.object({
  // TODO: Add chordMember.anl attributes
});

export type AttrChordMemberAnlData = v.InferOutput<typeof AttrChordMemberAnlSchema>;
