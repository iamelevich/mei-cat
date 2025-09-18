import * as v from "valibot";

/**
 * Attributes for staff location pitched.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffLoc.pitched.html
 */
export const AttrStaffLocPitchedSchema = v.object({
  // TODO: Add staff location pitched attributes
});

export type AttrStaffLocPitchedData = v.InferOutput<typeof AttrStaffLocPitchedSchema>;
