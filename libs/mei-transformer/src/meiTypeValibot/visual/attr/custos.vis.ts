import * as v from "valibot";

/**
 * Attributes for custos.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.custos.vis.html
 */
export const AttrCustosVisSchema = v.object({
  // TODO: Add custos.vis attributes
});

export type AttrCustosVisData = v.InferOutput<typeof AttrCustosVisSchema>;
