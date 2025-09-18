import * as v from "valibot";

/**
 * Attributes for tabDurSym.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabDurSym.vis.html
 */
export const AttrTabDurSymVisSchema = v.object({
  // TODO: Add tabDurSym.vis attributes
});

export type AttrTabDurSymVisData = v.InferOutput<typeof AttrTabDurSymVisSchema>;
