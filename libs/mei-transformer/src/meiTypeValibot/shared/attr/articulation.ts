import * as v from "valibot";

/**
 * Attributes for articulation.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.articulation.html
 */
export const AttrArticulationSchema = v.object({
  // TODO: Add articulation attributes
});

export type AttrArticulationData = v.InferOutput<typeof AttrArticulationSchema>;
