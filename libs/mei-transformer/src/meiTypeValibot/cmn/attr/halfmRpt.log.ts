import * as v from "valibot";

/**
 * Attributes for halfmRpt.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.halfmRpt.log.html
 */
export const AttrHalfmRptLogSchema = v.object({
  // TODO: Add halfmRpt.log attributes
});

export type AttrHalfmRptLogData = v.InferOutput<typeof AttrHalfmRptLogSchema>;
