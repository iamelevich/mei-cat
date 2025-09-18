import * as v from "valibot";

/**
 * Attributes for halfmRpt.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.halfmRpt.vis.html
 */
export const AttrHalfmRptVisSchema = v.object({
  // TODO: Add halfmRpt.vis attributes
});

export type AttrHalfmRptVisData = v.InferOutput<typeof AttrHalfmRptVisSchema>;
