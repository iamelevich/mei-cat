import * as v from "valibot";

/**
 * Attributes that specify the type of neumes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.neumeType.html
 */
export const AttrNeumeTypeSchema = v.object({
	// Direct attributes
	/**
	 * Designation which characterizes the element in some sense, using any convenient classification scheme or typology that employs single-token labels.
	 */
	"@type": v.optional(v.string()),
});

export type AttrNeumeTypeData = v.InferOutput<typeof AttrNeumeTypeSchema>;
