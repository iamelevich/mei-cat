import * as v from "valibot";

/**
 * Attributes for dir.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dir.vis.html
 */
export const AttrDirVisSchema = v.object({
  // TODO: Add dir.vis attributes
});

export type AttrDirVisData = v.InferOutput<typeof AttrDirVisSchema>;
