import * as v from "valibot";

/**
 * Attributes for lv.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lv.ges.html
 */
export const AttrLvGesSchema = v.object({
  // TODO: Add lv.ges attributes
});

export type AttrLvGesData = v.InferOutput<typeof AttrLvGesSchema>;
