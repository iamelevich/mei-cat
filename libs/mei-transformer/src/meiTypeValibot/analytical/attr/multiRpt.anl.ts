import * as v from "valibot";

/**
 * Attributes for multiRpt.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRpt.anl.html
 */
export const AttrMultiRptAnlSchema = v.object({
  // TODO: Add multiRpt.anl attributes
});

export type AttrMultiRptAnlData = v.InferOutput<typeof AttrMultiRptAnlSchema>;
