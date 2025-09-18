import * as v from "valibot";

/**
 * Attributes for gliss.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.gliss.vis.html
 */
export const AttrGlissVisSchema = v.object({
  // TODO: Add gliss.vis attributes
});

export type AttrGlissVisData = v.InferOutput<typeof AttrGlissVisSchema>;
