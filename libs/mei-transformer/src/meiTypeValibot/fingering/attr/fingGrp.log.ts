import * as v from "valibot";

/**
 * Attributes for fingGrp.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fingGrp.log.html
 */
export const AttrFingGrpLogSchema = v.object({
  // TODO: Add fingGrp.log attributes
});

export type AttrFingGrpLogData = v.InferOutput<typeof AttrFingGrpLogSchema>;
