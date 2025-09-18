import * as v from "valibot";

/**
 * Attributes for hispanTick.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hispanTick.anl.html
 */
export const AttrHispanTickAnlSchema = v.object({
  // TODO: Add hispanTick.anl attributes
});

export type AttrHispanTickAnlData = v.InferOutput<typeof AttrHispanTickAnlSchema>;
