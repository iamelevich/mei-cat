import * as v from "valibot";

/**
 * Attributes for artic.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.artic.vis.html
 */
export const AttrArticVisSchema = v.object({
  // TODO: Add artic.vis attributes
});

export type AttrArticVisData = v.InferOutput<typeof AttrArticVisSchema>;
