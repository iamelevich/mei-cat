import * as v from "valibot";

/**
 * Attributes that provide bibliographic information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html
 */
export const AttrBiblSchema = v.object({
	/**
	 * Contains a reference to a field or element in another descriptive encoding system to which this MEI element is comparable.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html#analog
	 */
	"@analog": v.optional(v.string()),
});

export type AttrBiblData = v.InferOutput<typeof AttrBiblSchema>;
