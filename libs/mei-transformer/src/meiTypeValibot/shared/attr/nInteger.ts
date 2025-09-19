import * as v from "valibot";

/**
 * Attributes used to supply an integer number designation for an element..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nInteger.html
 */
export const AttrNIntegerSchema = v.object({
	// Direct attributes
	/**
	 * Provides a numeric designation that indicates an element’s position in a sequence of similar elements. Its value must be a non-negative integer.
	 */
	"@n": v.optional(v.string()),
});

export type AttrNIntegerData = v.InferOutput<typeof AttrNIntegerSchema>;
