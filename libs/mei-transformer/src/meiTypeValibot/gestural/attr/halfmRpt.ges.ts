import * as v from "valibot";

/**
 * Attributes for halfmRpt.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.halfmRpt.ges.html
 */
export const AttrHalfmRptGesSchema = v.object({
  // TODO: Add halfmRpt.ges attributes
});

export type AttrHalfmRptGesData = v.InferOutput<typeof AttrHalfmRptGesSchema>;
