import * as v from "valibot";

/**
 * Attributes for staffDef.log.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.log.cmn.html
 */
export const AttrStaffDefLogCmnSchema = v.object({
  // TODO: Add staffDef.log.cmn attributes
});

export type AttrStaffDefLogCmnData = v.InferOutput<typeof AttrStaffDefLogCmnSchema>;
