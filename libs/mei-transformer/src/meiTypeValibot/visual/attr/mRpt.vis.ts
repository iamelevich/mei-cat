import * as v from "valibot";

/**
 * Attributes for mRpt.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.vis.html
 */
export const AttrMRptVisSchema = v.object({
  // TODO: Add mRpt.vis attributes
});

export type AttrMRptVisData = v.InferOutput<typeof AttrMRptVisSchema>;
