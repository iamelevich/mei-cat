import * as v from "valibot";

/**
 * Attributes for neume.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.neume.vis.html
 */
export const AttrNeumeVisSchema = v.object({
  // TODO: Add neume.vis attributes
});

export type AttrNeumeVisData = v.InferOutput<typeof AttrNeumeVisSchema>;
