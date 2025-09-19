import * as v from "valibot";

/**
 * Visual color attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.color.html
 */
export const AttrColorSchema = v.object({
	// Direct attributes
	/**
	 * Used to indicate visual appearance. Do not confuse this with the musical term 'color' as used in pre-CMN notation.
	 */
	"@color": v.optional(v.string()),
});

export type AttrColorData = v.InferOutput<typeof AttrColorSchema>;
