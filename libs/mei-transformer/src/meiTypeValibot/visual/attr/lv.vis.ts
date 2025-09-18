import * as v from "valibot";

/**
 * Attributes for lv.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lv.vis.html
 */
export const AttrLvVisSchema = v.object({
  // TODO: Add lv.vis attributes
});

export type AttrLvVisData = v.InferOutput<typeof AttrLvVisSchema>;
