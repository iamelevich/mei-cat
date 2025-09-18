import * as v from "valibot";

/**
 * Attributes for chordDef.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordDef.anl.html
 */
export const AttrChordDefAnlSchema = v.object({
  // TODO: Add chordDef.anl attributes
});

export type AttrChordDefAnlData = v.InferOutput<typeof AttrChordDefAnlSchema>;
