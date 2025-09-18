import * as v from "valibot";

/**
 * Attributes for mRpt2.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt2.vis.html
 */
export const AttrMRpt2VisSchema = v.object({
  // TODO: Add mRpt2.vis attributes
});

export type AttrMRpt2VisData = v.InferOutput<typeof AttrMRpt2VisSchema>;
