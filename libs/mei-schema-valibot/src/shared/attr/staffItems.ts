import * as v from "valibot";

/**
 * Attributes that describe items printed near (above, below, or between) staves.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffItems.html
 */
export const AttrStaffItemsSchema = v.object({
	// Direct attributes
	/**
	 * Describes vertical order of items printed above a staff, from closest to farthest away from the staff.
	 */
	"@aboveorder": v.optional(v.string()),
	/**
	 * Describes vertical order of items printed below a staff, from closest to farthest away from the staff.
	 */
	"@beloworder": v.optional(v.string()),
	/**
	 * Describes vertical order of items printed between staves, from top to bottom.
	 */
	"@betweenorder": v.optional(v.string()),
});

export type AttrStaffItemsData = v.InferOutput<typeof AttrStaffItemsSchema>;
