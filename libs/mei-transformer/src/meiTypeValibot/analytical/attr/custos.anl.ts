import * as v from "valibot";

/**
 * Attributes for custos.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.custos.anl.html
 */
export const AttrCustosAnlSchema = v.object({
  // TODO: Add custos.anl attributes
});

export type AttrCustosAnlData = v.InferOutput<typeof AttrCustosAnlSchema>;
