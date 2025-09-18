import * as v from "valibot";

/**
 * Attributes for bifolium surfaces.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html
 */
export const AttrBifoliumSurfacesSchema = v.object({
  // TODO: Add bifolium surfaces attributes
});

export type AttrBifoliumSurfacesData = v.InferOutput<typeof AttrBifoliumSurfacesSchema>;
