import * as v from "valibot";

/**
 * Attributes for placement on staff.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.placementOnStaff.html
 */
export const AttrPlacementOnStaffSchema = v.object({
  // TODO: Add placement on staff attributes
});

export type AttrPlacementOnStaffData = v.InferOutput<typeof AttrPlacementOnStaffSchema>;
