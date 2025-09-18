import * as v from "valibot";

/**
 * Attributes for hispanTick.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hispanTick.log.html
 */
export const AttrHispanTickLogSchema = v.object({
  // TODO: Add hispanTick.log attributes
});

export type AttrHispanTickLogData = v.InferOutput<typeof AttrHispanTickLogSchema>;
