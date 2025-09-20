import * as v from "valibot";

/**
 * Attributes describing the form of a tremolo..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tremForm.html
 */
export const AttrTremFormSchema = v.object({
	// Direct attributes
	/**
	 * Describes the style of the tremolo.
	 */
	"@form": v.optional(v.string()),
});

export type AttrTremFormData = v.InferOutput<typeof AttrTremFormSchema>;
