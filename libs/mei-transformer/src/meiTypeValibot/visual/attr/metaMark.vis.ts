import * as v from "valibot";

/**
 * Attributes for metaMark.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metaMark.vis.html
 */
export const AttrMetaMarkVisSchema = v.object({
  // TODO: Add metaMark.vis attributes
});

export type AttrMetaMarkVisData = v.InferOutput<typeof AttrMetaMarkVisSchema>;
