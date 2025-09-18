import * as v from "valibot";

/**
 * Attributes for curve.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curve.vis.html
 */
export const AttrCurveVisSchema = v.object({
  // TODO: Add curve.vis attributes
});

export type AttrCurveVisData = v.InferOutput<typeof AttrCurveVisSchema>;
