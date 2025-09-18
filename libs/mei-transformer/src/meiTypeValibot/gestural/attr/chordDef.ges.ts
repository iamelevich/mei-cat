import * as v from "valibot";

/**
 * Attributes for chordDef.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordDef.ges.html
 */
export const AttrChordDefGesSchema = v.object({
  // TODO: Add chordDef.ges attributes
});

export type AttrChordDefGesData = v.InferOutput<typeof AttrChordDefGesSchema>;
