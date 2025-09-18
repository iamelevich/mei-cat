import * as v from "valibot";

/**
 * Attributes for sp.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sp.vis.html
 */
export const AttrSpVisSchema = v.object({
  // TODO: Add sp.vis attributes
});

export type AttrSpVisData = v.InferOutput<typeof AttrSpVisSchema>;
