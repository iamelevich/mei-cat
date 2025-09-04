import { Type } from "@sinclair/typebox";

/**
 * Attributes that link a folium element with a surface element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliumSurfaces.html
 */
export const AttrFoliumSurfacesSchema = Type.Object(
	{
		/**
		 * A reference to a surface element positioned on the recto side of the sheet.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliumSurfaces.html
		 */
		"@recto": Type.Optional(
			Type.String({
				format: "uri",
			}),
		),
		/**
		 * A reference to a surface element positioned on the verso side of the sheet.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliumSurfaces.html
		 */
		"@verso": Type.Optional(
			Type.String({
				format: "uri",
			}),
		),
	},
	{ additionalProperties: false },
);
