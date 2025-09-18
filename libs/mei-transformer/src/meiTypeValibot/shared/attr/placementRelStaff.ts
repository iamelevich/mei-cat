import * as v from "valibot";

/**
 * Attributes for placement relative to staff.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.placementRelStaff.html
 */
export const AttrPlacementRelStaffSchema = v.object({
  // TODO: Add placement relative to staff attributes
});

export type AttrPlacementRelStaffData = v.InferOutput<typeof AttrPlacementRelStaffSchema>;
