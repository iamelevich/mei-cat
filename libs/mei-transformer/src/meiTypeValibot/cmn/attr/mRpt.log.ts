import * as v from "valibot";

/**
 * Attributes for mRpt.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.log.html
 */
export const AttrMRptLogSchema = v.object({
  // TODO: Add mRpt.log attributes
});

export type AttrMRptLogData = v.InferOutput<typeof AttrMRptLogSchema>;
