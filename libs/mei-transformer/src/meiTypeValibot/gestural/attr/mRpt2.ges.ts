import * as v from "valibot";

/**
 * Attributes for mRpt2.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt2.ges.html
 */
export const AttrMRpt2GesSchema = v.object({
  // TODO: Add mRpt2.ges attributes
});

export type AttrMRpt2GesData = v.InferOutput<typeof AttrMRpt2GesSchema>;
