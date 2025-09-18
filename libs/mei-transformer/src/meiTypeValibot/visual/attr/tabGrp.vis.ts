import * as v from "valibot";

/**
 * Attributes for tabGrp.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.vis.html
 */
export const AttrTabGrpVisSchema = v.object({
  // TODO: Add tabGrp.vis attributes
});

export type AttrTabGrpVisData = v.InferOutput<typeof AttrTabGrpVisSchema>;
