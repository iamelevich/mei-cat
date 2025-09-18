import * as v from "valibot";

/**
 * Attributes for mRpt.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.anl.html
 */
export const AttrMRptAnlSchema = v.object({
  // TODO: Add mRpt.anl attributes
});

export type AttrMRptAnlData = v.InferOutput<typeof AttrMRptAnlSchema>;
