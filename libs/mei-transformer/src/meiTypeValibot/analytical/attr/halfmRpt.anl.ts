import * as v from "valibot";

/**
 * Attributes for halfmRpt.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.halfmRpt.anl.html
 */
export const AttrHalfmRptAnlSchema = v.object({
  // TODO: Add halfmRpt.anl attributes
});

export type AttrHalfmRptAnlData = v.InferOutput<typeof AttrHalfmRptAnlSchema>;
