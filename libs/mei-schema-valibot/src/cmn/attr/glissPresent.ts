import * as v from "valibot";

/**
 * Attributes that indicate whether an event participates in a glissando..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.glissPresent.html
 */
export const AttrGlissPresentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates that this element participates in a glissando. If visual information about the glissando needs to be recorded, then a <gi scheme="MEI">gliss</gi> element should be employed instead.
	 */
	"@gliss": v.optional(v.string()),
});

export type AttrGlissPresentData = v.InferOutput<typeof AttrGlissPresentSchema>;
