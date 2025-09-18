import * as v from "valibot";

/**
 * Attributes for curve.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curve.anl.html
 */
export const AttrCurveAnlSchema = v.object({
  // TODO: Add curve.anl attributes
});

export type AttrCurveAnlData = v.InferOutput<typeof AttrCurveAnlSchema>;
