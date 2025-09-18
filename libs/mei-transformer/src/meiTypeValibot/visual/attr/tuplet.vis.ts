import * as v from "valibot";

/**
 * Attributes for tuplet.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuplet.vis.html
 */
export const AttrTupletVisSchema = v.object({
  // TODO: Add tuplet.vis attributes
});

export type AttrTupletVisData = v.InferOutput<typeof AttrTupletVisSchema>;
