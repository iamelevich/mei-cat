import * as v from "valibot";

/**
 * Attributes for keyAccid.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyAccid.vis.html
 */
export const AttrKeyAccidVisSchema = v.object({
  // TODO: Add keyAccid.vis attributes
});

export type AttrKeyAccidVisData = v.InferOutput<typeof AttrKeyAccidVisSchema>;
