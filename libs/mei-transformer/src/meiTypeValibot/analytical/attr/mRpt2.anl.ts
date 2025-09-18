import * as v from "valibot";

/**
 * Attributes for mRpt2.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt2.anl.html
 */
export const AttrMRpt2AnlSchema = v.object({
  // TODO: Add mRpt2.anl attributes
});

export type AttrMRpt2AnlData = v.InferOutput<typeof AttrMRpt2AnlSchema>;
