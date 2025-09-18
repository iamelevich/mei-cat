import * as v from "valibot";

/**
 * Attributes for staffDef.log.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.log.mensural.html
 */
export const AttrStaffDefLogMensuralSchema = v.object({
  // TODO: Add staffDef.log.mensural attributes
});

export type AttrStaffDefLogMensuralData = v.InferOutput<typeof AttrStaffDefLogMensuralSchema>;
