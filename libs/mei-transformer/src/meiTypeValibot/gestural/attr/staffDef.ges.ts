import * as v from "valibot";

/**
 * Attributes for staffDef.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.ges.html
 */
export const AttrStaffDefGesSchema = v.object({
  // TODO: Add staffDef.ges attributes
});

export type AttrStaffDefGesData = v.InferOutput<typeof AttrStaffDefGesSchema>;
