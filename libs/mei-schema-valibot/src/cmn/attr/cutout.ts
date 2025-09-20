import * as v from "valibot";

/**
 * Attributes that indicate how to render the staff lines of the measure containing an element belonging to this attribute class..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cutout.html
 */
export const AttrCutoutSchema = v.object({
	// Direct attributes
	/**
	 * "Cut-out" style.
	 */
	"@cutout": v.optional(v.string()),
});

export type AttrCutoutData = v.InferOutput<typeof AttrCutoutSchema>;
