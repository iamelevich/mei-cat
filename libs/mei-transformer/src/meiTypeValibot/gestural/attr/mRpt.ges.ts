import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.ges.html
 */
export const AttrMRptGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMRptGesData = v.InferOutput<typeof AttrMRptGesSchema>;
