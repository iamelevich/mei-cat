import * as v from "valibot";

/**
 * Attributes that record renditional characteristics..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textRendition.html
 */
export const AttrTextRenditionSchema = v.object({
	// Direct attributes
	/**
	 * Used to extend the values of the rend attribute.
	 */
	"@altrend": v.optional(v.string()),
	/**
	 * Captures the appearance of the element’s contents using MEI-defined descriptors.
	 */
	"@rend": v.optional(v.string()),
});

export type AttrTextRenditionData = v.InferOutput<
	typeof AttrTextRenditionSchema
>;
