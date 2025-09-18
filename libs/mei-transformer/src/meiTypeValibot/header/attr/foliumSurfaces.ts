import * as v from "valibot";

/**
 * Attributes for folium surfaces.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliumSurfaces.html
 */
export const AttrFoliumSurfacesSchema = v.object({
  // TODO: Add folium surfaces attributes
});

export type AttrFoliumSurfacesData = v.InferOutput<typeof AttrFoliumSurfacesSchema>;
