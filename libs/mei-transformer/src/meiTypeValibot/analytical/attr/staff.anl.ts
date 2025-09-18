import * as v from "valibot";

/**
 * Attributes for staff.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staff.anl.html
 */
export const AttrStaffAnlSchema = v.object({
  // TODO: Add staff.anl attributes
});

export type AttrStaffAnlData = v.InferOutput<typeof AttrStaffAnlSchema>;
