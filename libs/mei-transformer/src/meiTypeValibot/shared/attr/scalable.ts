import * as v from "valibot";

/**
 * Attributes that describe relative size..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scalable.html
 */
export const AttrScalableSchema = v.object({
	// Direct attributes
	/**
	 * Scale factor to be applied to the feature to make it the desired display size.
	 */
	"@scale": v.optional(v.string()),
});

export type AttrScalableData = v.InferOutput<typeof AttrScalableSchema>;
