import * as v from "valibot";

/**
 * Attributes that describe correction and normalization methods..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.regularMethod.html
 */
export const AttrRegularMethodSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the method employed to mark corrections and normalizations.
	 */
	"@method": v.optional(v.string()),
});

export type AttrRegularMethodData = v.InferOutput<
	typeof AttrRegularMethodSchema
>;
