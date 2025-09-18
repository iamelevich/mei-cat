import * as v from "valibot";

/**
 * Attributes for ornam.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornam.vis.html
 */
export const AttrOrnamVisSchema = v.object({
  // TODO: Add ornam.vis attributes
});

export type AttrOrnamVisData = v.InferOutput<typeof AttrOrnamVisSchema>;
