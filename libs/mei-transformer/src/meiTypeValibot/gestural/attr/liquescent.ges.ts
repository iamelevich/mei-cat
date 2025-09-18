import * as v from "valibot";

/**
 * Attributes for liquescent.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.liquescent.ges.html
 */
export const AttrLiquescentGesSchema = v.object({
  // TODO: Add liquescent.ges attributes
});

export type AttrLiquescentGesData = v.InferOutput<typeof AttrLiquescentGesSchema>;
