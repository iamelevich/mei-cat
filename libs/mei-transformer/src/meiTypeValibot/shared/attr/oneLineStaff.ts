import * as v from "valibot";

/**
 * Attributes for one line staff.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oneLineStaff.html
 */
export const AttrOneLineStaffSchema = v.object({
  // TODO: Add one line staff attributes
});

export type AttrOneLineStaffData = v.InferOutput<typeof AttrOneLineStaffSchema>;
