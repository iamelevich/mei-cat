import * as v from "valibot";

/**
 * Attributes that describe the rendition of ties..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tieRend.html
 */
export const AttrTieRendSchema = v.object({
	// Direct attributes
	/**
	 *
	 */
	"@tie.lform": v.optional(v.string()),
	/**
	 *
	 */
	"@tie.lwidth": v.optional(v.string()),
});

export type AttrTieRendData = v.InferOutput<typeof AttrTieRendSchema>;
