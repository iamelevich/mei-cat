import * as v from "valibot";

/**
 * Attributes for attacca.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.vis.html
 */
export const AttrAttaccaVisSchema = v.object({
  // TODO: Add attacca.vis attributes
});

export type AttrAttaccaVisData = v.InferOutput<typeof AttrAttaccaVisSchema>;
