import * as v from "valibot";

/**
 * Attributes for hispanTick.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hispanTick.ges.html
 */
export const AttrHispanTickGesSchema = v.object({
  // TODO: Add hispanTick.ges attributes
});

export type AttrHispanTickGesData = v.InferOutput<typeof AttrHispanTickGesSchema>;
