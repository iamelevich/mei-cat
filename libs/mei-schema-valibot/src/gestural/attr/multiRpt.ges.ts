import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRpt.ges.html
 */
export const AttrMultiRptGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMultiRptGesData = v.InferOutput<typeof AttrMultiRptGesSchema>;
