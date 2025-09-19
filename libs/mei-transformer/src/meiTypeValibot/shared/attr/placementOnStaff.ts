import * as v from "valibot";

/**
 * Attributes capturing placement on a staff..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.placementOnStaff.html
 */
export const AttrPlacementOnStaffSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the placement of the item within the staff. A value of <val>true</val> means on the staff, and <val>false</val> off the staff.
	 */
	"@onstaff": v.optional(v.string()),
});

export type AttrPlacementOnStaffData = v.InferOutput<
	typeof AttrPlacementOnStaffSchema
>;
