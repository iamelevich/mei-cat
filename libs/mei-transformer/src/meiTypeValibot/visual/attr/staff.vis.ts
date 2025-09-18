import * as v from "valibot";

/**
 * Attributes for staff.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staff.vis.html
 */
export const AttrStaffVisSchema = v.object({
  // TODO: Add staff.vis attributes
});

export type AttrStaffVisData = v.InferOutput<typeof AttrStaffVisSchema>;
