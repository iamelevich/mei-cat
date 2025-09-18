import * as v from "valibot";

/**
 * Attributes for tabGrp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.ges.html
 */
export const AttrTabGrpGesSchema = v.object({
  // TODO: Add tabGrp.ges attributes
});

export type AttrTabGrpGesData = v.InferOutput<typeof AttrTabGrpGesSchema>;
