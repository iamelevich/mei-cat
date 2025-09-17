import * as v from "valibot";

/**
 * Attributes that provide canonical information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html
 */
export const AttrCanonicalSchema = v.object({
	/**
	 * Points to a canonically equivalent element.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html#codedval
	 */
	"@codedval": v.optional(v.string()),
});

export type AttrCanonicalData = v.InferOutput<typeof AttrCanonicalSchema>;
