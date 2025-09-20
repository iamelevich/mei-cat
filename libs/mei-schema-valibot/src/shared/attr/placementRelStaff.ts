import * as v from "valibot";

/**
 * Attributes capturing placement information with respect to the staff..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.placementRelStaff.html
 */
export const AttrPlacementRelStaffSchema = v.object({
	// Direct attributes
	/**
	 * Captures the placement of the item with respect to the staff with which it is associated.
	 */
	"@place": v.optional(v.string()),
});

export type AttrPlacementRelStaffData = v.InferOutput<
	typeof AttrPlacementRelStaffSchema
>;
