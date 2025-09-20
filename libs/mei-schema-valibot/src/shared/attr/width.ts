import * as v from "valibot";

/**
 * Attributes that describe horizontal size..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.width.html
 */
export const AttrWidthSchema = v.object({
	// Direct attributes
	/**
	 * Measurement of the horizontal dimension of an entity.
	 */
	"@width": v.optional(v.string()),
});

export type AttrWidthData = v.InferOutput<typeof AttrWidthSchema>;
