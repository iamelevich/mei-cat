import * as v from "valibot";

/**
 * Attributes for dynam.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dynam.vis.html
 */
export const AttrDynamVisSchema = v.object({
  // TODO: Add dynam.vis attributes
});

export type AttrDynamVisData = v.InferOutput<typeof AttrDynamVisSchema>;
