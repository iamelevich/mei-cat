import * as v from "valibot";

/**
 * Attributes for staffGrp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGrp.ges.html
 */
export const AttrStaffGrpGesSchema = v.object({
  // TODO: Add staffGrp.ges attributes
});

export type AttrStaffGrpGesData = v.InferOutput<typeof AttrStaffGrpGesSchema>;
