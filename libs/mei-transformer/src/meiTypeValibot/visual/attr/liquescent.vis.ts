import * as v from "valibot";

/**
 * Attributes for liquescent.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.liquescent.vis.html
 */
export const AttrLiquescentVisSchema = v.object({
  // TODO: Add liquescent.vis attributes
});

export type AttrLiquescentVisData = v.InferOutput<typeof AttrLiquescentVisSchema>;
