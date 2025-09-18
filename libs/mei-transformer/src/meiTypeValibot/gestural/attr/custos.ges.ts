import * as v from "valibot";

/**
 * Attributes for custos.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.custos.ges.html
 */
export const AttrCustosGesSchema = v.object({
  // TODO: Add custos.ges attributes
});

export type AttrCustosGesData = v.InferOutput<typeof AttrCustosGesSchema>;
