import * as v from "valibot";
import { AttrCurvatureDirectionSchema } from "../../visual";

/**
 * Attributes that record visual details of neume notation..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncForm.html
 */
export const AttrNcFormSchema = v.object({
	// Inherited attribute classes
	...AttrCurvatureDirectionSchema.entries,

	// Direct attributes
	/**
	 *
	 */
	"@angled": v.optional(v.string()),
	/**
	 * Connection to the previous component within the same neume; this attribute should not be used for the first component of a neume.
	 */
	"@con": v.optional(v.string()),
	/**
	 * Pen stroke has an extension; specific to Hispanic notation.
	 */
	"@hooked": v.optional(v.string()),
	/**
	 * Indicates participation in a ligature.
	 */
	"@ligated": v.optional(v.string()),
	/**
	 * Length of the pen stroke relative to the previous component within the same neume; this attribute should not be used for the first component of a neume.
	 */
	"@rellen": v.optional(v.string()),
	/**
	 * Direction of the initial direction for an s-shaped pen stroke; <abbr>i.e.</abbr>, "w" for the standard letter S, "e" for its mirror image, "s" for the letter S turned 90-degrees anti-clockwise, and "n" for its mirror image.
	 */
	"@s-shape": v.optional(v.string()),
	/**
	 * Direction of the pen stroke.
	 */
	"@tilt": v.optional(v.string()),
});

export type AttrNcFormData = v.InferOutput<typeof AttrNcFormSchema>;
