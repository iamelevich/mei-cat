import * as v from "valibot";

/**
 * Attributes for staffDef.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.anl.html
 */
export const AttrStaffDefAnlSchema = v.object({
  // TODO: Add staffDef.anl attributes
});

export type AttrStaffDefAnlData = v.InferOutput<typeof AttrStaffDefAnlSchema>;
