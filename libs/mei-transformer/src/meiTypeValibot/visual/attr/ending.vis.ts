import * as v from "valibot";

/**
 * Attributes for ending.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ending.vis.html
 */
export const AttrEndingVisSchema = v.object({
  // TODO: Add ending.vis attributes
});

export type AttrEndingVisData = v.InferOutput<typeof AttrEndingVisSchema>;
