import * as v from "valibot";

/**
 * Attributes used to supply a number-like designation for an element..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nNumberLike.html
 */
export const AttrNNumberLikeSchema = v.object({
	// Direct attributes
	/**
	 * Provides a number-like designation that indicates an element’s position in a sequence of similar elements. May not contain space characters.
	 */
	"@n": v.optional(v.string()),
});

export type AttrNNumberLikeData = v.InferOutput<typeof AttrNNumberLikeSchema>;
