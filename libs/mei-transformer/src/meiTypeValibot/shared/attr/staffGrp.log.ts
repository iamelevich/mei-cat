import * as v from "valibot";

/**
 * Attributes for staff group logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGrp.log.html
 */
export const AttrStaffGrpLogSchema = v.object({
  // TODO: Add staff group logging attributes
});

export type AttrStaffGrpLogData = v.InferOutput<typeof AttrStaffGrpLogSchema>;
