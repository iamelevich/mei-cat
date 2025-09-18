import * as v from "valibot";

/**
 * Attributes for hispanTick.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hispanTick.vis.html
 */
export const AttrHispanTickVisSchema = v.object({
  // TODO: Add hispanTick.vis attributes
});

export type AttrHispanTickVisData = v.InferOutput<typeof AttrHispanTickVisSchema>;
