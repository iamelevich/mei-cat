import * as v from "valibot";
import {
	AttrBarringSchema,
	AttrStaffGroupingSymSchema,
	AttrVisibilitySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGrp.vis.html
 */
export const AttrStaffGrpVisSchema = v.object({
	// Inherited attribute classes
	...AttrBarringSchema.entries,
	...AttrStaffGroupingSymSchema.entries,
	...AttrVisibilitySchema.entries,

	// Direct attributes
	/**
	 * Indicates whether bar lines go across the space between staves (true) or are only drawn across the lines of each staff (false).
	 */
	"@bar.thru": v.optional(v.string()),
});

export type AttrStaffGrpVisData = v.InferOutput<typeof AttrStaffGrpVisSchema>;
