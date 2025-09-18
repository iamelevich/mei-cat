import * as v from "valibot";

/**
 * Attributes for multiRpt.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRpt.ges.html
 */
export const AttrMultiRptGesSchema = v.object({
  // TODO: Add multiRpt.ges attributes
});

export type AttrMultiRptGesData = v.InferOutput<typeof AttrMultiRptGesSchema>;
