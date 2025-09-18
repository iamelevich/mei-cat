import * as v from "valibot";

/**
 * Attributes for articulation.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.articulation.ges.html
 */
export const AttrArticulationGesSchema = v.object({
  // TODO: Add articulation.ges attributes
});

export type AttrArticulationGesData = v.InferOutput<typeof AttrArticulationGesSchema>;
