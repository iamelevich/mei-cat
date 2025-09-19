import * as v from "valibot";

/**
 * Attributes that link a folium element with a <gi scheme="MEI">surface</gi> element..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliumSurfaces.html
 */
export const AttrFoliumSurfacesSchema = v.object({
	// Direct attributes
	/**
	 * A reference to a <gi scheme="MEI">surface</gi> element positioned on the recto side of the sheet.
	 */
	"@recto": v.optional(v.string()),
	/**
	 * A reference to a <gi scheme="MEI">surface</gi> element positioned on the verso side of the sheet.
	 */
	"@verso": v.optional(v.string()),
});

export type AttrFoliumSurfacesData = v.InferOutput<
	typeof AttrFoliumSurfacesSchema
>;
