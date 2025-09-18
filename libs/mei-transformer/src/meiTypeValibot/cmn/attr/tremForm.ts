import * as v from "valibot";

/**
 * Attributes describing the form of a tremolo.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tremForm.html
 */
export const AttrTremFormSchema = v.object({
	/**
	 * Describes the style of the tremolo.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tremForm.html#form
	 */
	"@form": v.optional(v.union([v.literal("meas"), v.literal("unmeas")])),
});

export type AttrTremFormData = v.InferOutput<typeof AttrTremFormSchema>;
