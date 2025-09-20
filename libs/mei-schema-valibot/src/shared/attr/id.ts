import * as v from "valibot";

/**
 * Attributes that uniquely identify an element..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
 */
export const AttrIdSchema = v.object({
	// Direct attributes
	/**
	 * Regularizes the naming of an element and thus facilitates building links between it and other resources. Each id attribute within a document must have a unique value.
	 */
	"@xml:id": v.optional(v.string()),
});

export type AttrIdData = v.InferOutput<typeof AttrIdSchema>;
