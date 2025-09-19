import * as v from "valibot";

/**
 * Bibliographic attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html
 */
export const AttrBiblSchema = v.object({
	// Direct attributes
	/**
	 * Contains a reference to a field or element in another descriptive encoding system to which this MEI element is comparable.
	 */
	"@analog": v.optional(v.string()),
});

export type AttrBiblData = v.InferOutput<typeof AttrBiblSchema>;
