import * as v from "valibot";

/**
 * Attributes for staffDef.vis.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.cmn.html
 */
export const AttrStaffDefVisCmnSchema = v.object({
  // TODO: Add staffDef.vis.cmn attributes
});

export type AttrStaffDefVisCmnData = v.InferOutput<typeof AttrStaffDefVisCmnSchema>;
