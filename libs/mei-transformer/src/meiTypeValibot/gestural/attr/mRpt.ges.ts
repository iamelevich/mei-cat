import * as v from "valibot";

/**
 * Attributes for mRpt.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.ges.html
 */
export const AttrMRptGesSchema = v.object({
  // TODO: Add mRpt.ges attributes
});

export type AttrMRptGesData = v.InferOutput<typeof AttrMRptGesSchema>;
