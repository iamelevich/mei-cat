import * as v from "valibot";

/**
 * Attributes for caesura.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.caesura.vis.html
 */
export const AttrCaesuraVisSchema = v.object({
  // TODO: Add caesura.vis attributes
});

export type AttrCaesuraVisData = v.InferOutput<typeof AttrCaesuraVisSchema>;
