import * as v from "valibot";

/**
 * Attributes describing the direction of curvature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curvatureDirection.html
 */
export const AttrCurvatureDirectionSchema = v.object({
	// Direct attributes
	/**
	 * Records direction of curvature.
	 */
	"@curve": v.optional(v.string()),
});

export type AttrCurvatureDirectionData = v.InferOutput<
	typeof AttrCurvatureDirectionSchema
>;
