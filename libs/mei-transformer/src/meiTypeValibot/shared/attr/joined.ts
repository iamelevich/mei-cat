import * as v from "valibot";

/**
 * Attributes indicating that elements are semantically linked; that is, while the parts are encoded separately, together they may be thought of as a single intellectual object..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.joined.html
 */
export const AttrJoinedSchema = v.object({
	// Direct attributes
	/**
	 * Used for linking visually separate entities that form a single logical entity, for example, multiple slurs broken across a system break that form a single musical phrase. Also used to indicate a measure which metrically completes the current one. Record the identifiers of the separately encoded components, excluding the one carrying the attribute.
	 */
	"@join": v.optional(v.string()),
});

export type AttrJoinedData = v.InferOutput<typeof AttrJoinedSchema>;
