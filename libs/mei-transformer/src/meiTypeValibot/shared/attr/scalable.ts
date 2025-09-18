import * as v from "valibot";

/**
 * Attributes for scalable elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scalable.html
 */
export const AttrScalableSchema = v.object({
  // TODO: Add scalable attributes
});

export type AttrScalableData = v.InferOutput<typeof AttrScalableSchema>;
