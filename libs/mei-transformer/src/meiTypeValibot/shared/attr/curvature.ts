import * as v from "valibot";

/**
 * Attributes for curvature.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curvature.html
 */
export const AttrCurvatureSchema = v.object({
  // TODO: Add curvature attributes
});

export type AttrCurvatureData = v.InferOutput<typeof AttrCurvatureSchema>;
