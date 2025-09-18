import * as v from "valibot";

/**
 * Attributes for lvPresent.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lvPresent.html
 */
export const AttrLvPresentSchema = v.object({
  // TODO: Add lvPresent attributes
});

export type AttrLvPresentData = v.InferOutput<typeof AttrLvPresentSchema>;
