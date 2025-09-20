import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curve.anl.html
 */
export const AttrCurveAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCurveAnlData = v.InferOutput<typeof AttrCurveAnlSchema>;
