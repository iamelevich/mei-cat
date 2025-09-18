import * as v from "valibot";

/**
 * Attributes for chord member logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordMember.log.html
 */
export const AttrChordMemberLogSchema = v.object({
  // TODO: Add chordMember.log attributes
});

export type AttrChordMemberLogData = v.InferOutput<typeof AttrChordMemberLogSchema>;
