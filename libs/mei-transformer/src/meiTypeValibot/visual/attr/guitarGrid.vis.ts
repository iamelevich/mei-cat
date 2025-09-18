import * as v from "valibot";

/**
 * Attributes for guitarGrid.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.guitarGrid.vis.html
 */
export const AttrGuitarGridVisSchema = v.object({
  // TODO: Add guitarGrid.vis attributes
});

export type AttrGuitarGridVisData = v.InferOutput<typeof AttrGuitarGridVisSchema>;
