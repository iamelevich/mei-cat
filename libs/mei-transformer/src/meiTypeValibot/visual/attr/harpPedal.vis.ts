import * as v from "valibot";

/**
 * Attributes for harpPedal.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.vis.html
 */
export const AttrHarpPedalVisSchema = v.object({
  // TODO: Add harpPedal.vis attributes
});

export type AttrHarpPedalVisData = v.InferOutput<typeof AttrHarpPedalVisSchema>;
