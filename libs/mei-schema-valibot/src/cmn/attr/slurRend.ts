import * as v from "valibot";

/**
 * Attributes that describe the rendition of slurs..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slurRend.html
 */
export const AttrSlurRendSchema = v.object({
	// Direct attributes
	/**
	 *
	 */
	"@slur.lform": v.optional(v.string()),
	/**
	 *
	 */
	"@slur.lwidth": v.optional(v.string()),
});

export type AttrSlurRendData = v.InferOutput<typeof AttrSlurRendSchema>;
