import * as v from "valibot";

/**
 * Attributes describing the method of performance..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.articulation.ges.html
 */
export const AttrArticulationGesSchema = v.object({
	// Direct attributes
	/**
	 * Records performed articulation that differs from the written value.
	 */
	"@artic.ges": v.optional(v.string()),
});

export type AttrArticulationGesData = v.InferOutput<
	typeof AttrArticulationGesSchema
>;
