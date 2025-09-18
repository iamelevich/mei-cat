import * as v from "valibot";

/**
 * Attributes for chord definition logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordDef.log.html
 */
export const AttrChordDefLogSchema = v.object({
  // TODO: Add chordDef.log attributes
});

export type AttrChordDefLogData = v.InferOutput<typeof AttrChordDefLogSchema>;
