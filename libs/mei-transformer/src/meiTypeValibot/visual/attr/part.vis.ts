import * as v from "valibot";

/**
 * Attributes for part.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.part.vis.html
 */
export const AttrPartVisSchema = v.object({
  // TODO: Add part.vis attributes
});

export type AttrPartVisData = v.InferOutput<typeof AttrPartVisSchema>;
