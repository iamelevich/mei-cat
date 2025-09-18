import * as v from "valibot";

/**
 * Attributes for chordDef.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordDef.vis.html
 */
export const AttrChordDefVisSchema = v.object({
  // TODO: Add chordDef.vis attributes
});

export type AttrChordDefVisData = v.InferOutput<typeof AttrChordDefVisSchema>;
