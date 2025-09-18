import * as v from "valibot";

/**
 * Attributes for media bounds.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mediaBounds.html
 */
export const AttrMediaBoundsSchema = v.object({
  // TODO: Add media bounds attributes
});

export type AttrMediaBoundsData = v.InferOutput<typeof AttrMediaBoundsSchema>;
