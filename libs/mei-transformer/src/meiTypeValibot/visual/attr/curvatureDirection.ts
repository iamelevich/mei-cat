import * as v from "valibot";

/**
 * Attributes for curvatureDirection.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curvatureDirection.html
 */
export const AttrCurvatureDirectionSchema = v.object({
  // TODO: Add curvatureDirection attributes
});

export type AttrCurvatureDirectionData = v.InferOutput<typeof AttrCurvatureDirectionSchema>;
