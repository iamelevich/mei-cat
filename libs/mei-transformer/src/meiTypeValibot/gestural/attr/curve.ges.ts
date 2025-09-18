import * as v from "valibot";

/**
 * Attributes for curve.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curve.ges.html
 */
export const AttrCurveGesSchema = v.object({
  // TODO: Add curve.ges attributes
});

export type AttrCurveGesData = v.InferOutput<typeof AttrCurveGesSchema>;
