import * as v from "valibot";

/**
 * Attributes that describe foliation schemes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliation.scheme.html
 */
export const AttrFoliationSchemeSchema = v.object({
	/**
	 * Identifies the foliation scheme in terms of which the location is being specified by pointing to some foliation element defining it, or to some other equivalent resource.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliation.scheme.html#scheme
	 */
	"@scheme": v.optional(v.string()),
});

export type AttrFoliationSchemeData = v.InferOutput<typeof AttrFoliationSchemeSchema>;
