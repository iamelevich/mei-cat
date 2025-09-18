import * as v from "valibot";

/**
 * Attributes for height.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.height.html
 */
export const AttrHeightSchema = v.object({
  // TODO: Add height attributes
});

export type AttrHeightData = v.InferOutput<typeof AttrHeightSchema>;
