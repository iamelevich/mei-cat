import * as v from "valibot";

/**
 * Attributes for hairpin.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.vis.html
 */
export const AttrHairpinVisSchema = v.object({
  // TODO: Add hairpin.vis attributes
});

export type AttrHairpinVisData = v.InferOutput<typeof AttrHairpinVisSchema>;
