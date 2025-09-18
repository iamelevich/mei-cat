import * as v from "valibot";

/**
 * Attributes for staff location.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffLoc.html
 */
export const AttrStaffLocSchema = v.object({
  // TODO: Add staff location attributes
});

export type AttrStaffLocData = v.InferOutput<typeof AttrStaffLocSchema>;
