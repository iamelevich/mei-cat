import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curve.ges.html
 */
export const AttrCurveGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCurveGesData = v.InferOutput<typeof AttrCurveGesSchema>;
