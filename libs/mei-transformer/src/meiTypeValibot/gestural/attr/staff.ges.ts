import * as v from "valibot";

/**
 * Attributes for staff.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staff.ges.html
 */
export const AttrStaffGesSchema = v.object({
  // TODO: Add staff.ges attributes
});

export type AttrStaffGesData = v.InferOutput<typeof AttrStaffGesSchema>;
