import * as v from "valibot";

/**
 * Attributes for staffGrp.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGrp.vis.html
 */
export const AttrStaffGrpVisSchema = v.object({
  // TODO: Add staffGrp.vis attributes
});

export type AttrStaffGrpVisData = v.InferOutput<typeof AttrStaffGrpVisSchema>;
