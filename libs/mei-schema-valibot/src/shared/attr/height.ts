import * as v from "valibot";

/**
 * Attributes that describe vertical size..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.height.html
 */
export const AttrHeightSchema = v.object({
	// Direct attributes
	/**
	 * Measurement of the vertical dimension of an entity.
	 */
	"@height": v.optional(v.string()),
});

export type AttrHeightData = v.InferOutput<typeof AttrHeightSchema>;
