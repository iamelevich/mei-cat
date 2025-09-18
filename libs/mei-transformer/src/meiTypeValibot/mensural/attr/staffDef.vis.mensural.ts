import * as v from "valibot";

/**
 * Attributes for staffDef.vis.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.mensural.html
 */
export const AttrStaffDefVisMensuralSchema = v.object({
  // TODO: Add staffDef.vis.mensural attributes
});

export type AttrStaffDefVisMensuralData = v.InferOutput<typeof AttrStaffDefVisMensuralSchema>;
