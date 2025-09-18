import * as v from "valibot";

/**
 * Attributes for chord.ges.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.ges.cmn.html
 */
export const AttrChordGesCmnSchema = v.object({
  // TODO: Add chord.ges.cmn attributes
});

export type AttrChordGesCmnData = v.InferOutput<typeof AttrChordGesCmnSchema>;
