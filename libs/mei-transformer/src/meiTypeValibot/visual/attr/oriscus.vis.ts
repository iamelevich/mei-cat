import * as v from "valibot";

/**
 * Attributes for oriscus.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oriscus.vis.html
 */
export const AttrOriscusVisSchema = v.object({
  // TODO: Add oriscus.vis attributes
});

export type AttrOriscusVisData = v.InferOutput<typeof AttrOriscusVisSchema>;
