import * as v from "valibot";

/**
 * Attributes for curve.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curve.log.html
 */
export const AttrCurveLogSchema = v.object({
  // TODO: Add curve.log attributes
});

export type AttrCurveLogData = v.InferOutput<typeof AttrCurveLogSchema>;
