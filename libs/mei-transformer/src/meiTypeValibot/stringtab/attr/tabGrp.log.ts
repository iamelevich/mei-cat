import * as v from "valibot";

/**
 * Attributes for tabGrp.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.log.html
 */
export const AttrTabGrpLogSchema = v.object({
  // TODO: Add tabGrp.log attributes
});

export type AttrTabGrpLogData = v.InferOutput<typeof AttrTabGrpLogSchema>;
