import * as v from "valibot";

/**
 * Attributes for staffDef.vis.tablature.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.tablature.html
 */
export const AttrStaffDefVisTablatureSchema = v.object({
  // TODO: Add staffDef.vis.tablature attributes
});

export type AttrStaffDefVisTablatureData = v.InferOutput<typeof AttrStaffDefVisTablatureSchema>;
