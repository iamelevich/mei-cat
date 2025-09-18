import * as v from "valibot";

/**
 * Attributes for staff logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staff.log.html
 */
export const AttrStaffLogSchema = v.object({
  // TODO: Add staff logging attributes
});

export type AttrStaffLogData = v.InferOutput<typeof AttrStaffLogSchema>;
