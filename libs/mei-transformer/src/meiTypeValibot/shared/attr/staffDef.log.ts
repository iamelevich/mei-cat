import * as v from "valibot";

/**
 * Attributes for staff definition logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.log.html
 */
export const AttrStaffDefLogSchema = v.object({
  // TODO: Add staff definition logging attributes
});

export type AttrStaffDefLogData = v.InferOutput<typeof AttrStaffDefLogSchema>;
