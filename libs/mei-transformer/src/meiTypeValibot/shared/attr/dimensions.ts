import * as v from "valibot";

/**
 * Attributes for dimensions.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dimensions.html
 */
export const AttrDimensionsSchema = v.object({
  // TODO: Add dimensions attributes
});

export type AttrDimensionsData = v.InferOutput<typeof AttrDimensionsSchema>;
