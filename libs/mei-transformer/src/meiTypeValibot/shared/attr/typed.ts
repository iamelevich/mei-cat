import * as v from "valibot";
import { AttrClassedSchema } from "..";

/**
 * Attributes which can be used to classify features..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typed.html
 */
export const AttrTypedSchema = v.object({
	// Inherited attribute classes
	...AttrClassedSchema.entries,

	// Direct attributes
	/**
	 * Designation which characterizes the element in some sense, using any convenient classification scheme or typology that employs single-token labels.
	 */
	"@type": v.optional(v.string()),
});

export type AttrTypedData = v.InferOutput<typeof AttrTypedSchema>;
