import * as v from "valibot";

/**
 * Attributes for staffGrp.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGrp.anl.html
 */
export const AttrStaffGrpAnlSchema = v.object({
  // TODO: Add staffGrp.anl attributes
});

export type AttrStaffGrpAnlData = v.InferOutput<typeof AttrStaffGrpAnlSchema>;
