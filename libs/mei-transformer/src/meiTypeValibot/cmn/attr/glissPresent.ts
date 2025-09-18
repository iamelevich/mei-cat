import * as v from "valibot";

/**
 * Attributes for glissPresent.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.glissPresent.html
 */
export const AttrGlissPresentSchema = v.object({
	/**
	 * Indicates that this element participates in a glissando. If visual information about the glissando needs to be recorded, then a gliss element should be employed instead.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.glissPresent.html#gliss
	 */
	"@gliss": v.optional(v.string()),
});

export type AttrGlissPresentData = v.InferOutput<typeof AttrGlissPresentSchema>;
