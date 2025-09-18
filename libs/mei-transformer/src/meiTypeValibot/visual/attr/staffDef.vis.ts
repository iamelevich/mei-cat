import * as v from "valibot";

/**
 * Attributes for staffDef.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.html
 */
export const AttrStaffDefVisSchema = v.object({
  // TODO: Add staffDef.vis attributes
});

export type AttrStaffDefVisData = v.InferOutput<typeof AttrStaffDefVisSchema>;
