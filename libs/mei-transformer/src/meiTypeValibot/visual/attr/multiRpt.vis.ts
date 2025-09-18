import * as v from "valibot";

/**
 * Attributes for multiRpt.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRpt.vis.html
 */
export const AttrMultiRptVisSchema = v.object({
  // TODO: Add multiRpt.vis attributes
});

export type AttrMultiRptVisData = v.InferOutput<typeof AttrMultiRptVisSchema>;
