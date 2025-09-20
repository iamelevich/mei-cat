import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.anl.html
 */
export const AttrMRptAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMRptAnlData = v.InferOutput<typeof AttrMRptAnlSchema>;
