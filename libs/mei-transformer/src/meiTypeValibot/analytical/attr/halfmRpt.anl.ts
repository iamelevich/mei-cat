import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.halfmRpt.anl.html
 */
export const AttrHalfmRptAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrHalfmRptAnlData = v.InferOutput<typeof AttrHalfmRptAnlSchema>;
