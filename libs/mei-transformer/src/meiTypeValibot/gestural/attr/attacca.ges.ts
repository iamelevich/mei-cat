import * as v from "valibot";

/**
 * Attributes for attacca.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.ges.html
 */
export const AttrAttaccaGesSchema = v.object({
  // TODO: Add attacca.ges attributes
});

export type AttrAttaccaGesData = v.InferOutput<typeof AttrAttaccaGesSchema>;
