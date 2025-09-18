import * as v from "valibot";

/**
 * Attributes for parts.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.parts.vis.html
 */
export const AttrPartsVisSchema = v.object({
  // TODO: Add parts.vis attributes
});

export type AttrPartsVisData = v.InferOutput<typeof AttrPartsVisSchema>;
