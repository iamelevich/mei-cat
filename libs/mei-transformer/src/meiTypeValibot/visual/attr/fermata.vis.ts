import * as v from "valibot";

/**
 * Attributes for fermata.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.vis.html
 */
export const AttrFermataVisSchema = v.object({
  // TODO: Add fermata.vis attributes
});

export type AttrFermataVisData = v.InferOutput<typeof AttrFermataVisSchema>;
