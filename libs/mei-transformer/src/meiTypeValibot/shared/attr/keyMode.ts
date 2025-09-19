import * as v from "valibot";

/**
 * Attributes for describing key mode..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyMode.html
 */
export const AttrKeyModeSchema = v.object({
	// Direct attributes
	/**
	 * Indicates major, minor, or other tonality.
	 */
	"@mode": v.optional(v.string()),
});

export type AttrKeyModeData = v.InferOutput<typeof AttrKeyModeSchema>;
