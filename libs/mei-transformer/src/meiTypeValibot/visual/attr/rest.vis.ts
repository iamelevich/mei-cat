import * as v from "valibot";

/**
 * Attributes for rest.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.vis.html
 */
export const AttrRestVisSchema = v.object({
  // TODO: Add rest.vis attributes
});

export type AttrRestVisData = v.InferOutput<typeof AttrRestVisSchema>;
