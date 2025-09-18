import * as v from "valibot";

/**
 * Attributes for f.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.f.vis.html
 */
export const AttrFVisSchema = v.object({
  // TODO: Add f.vis attributes
});

export type AttrFVisData = v.InferOutput<typeof AttrFVisSchema>;
