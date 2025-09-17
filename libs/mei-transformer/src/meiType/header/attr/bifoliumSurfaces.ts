import { Type } from "typebox";

/**
 * Attributes that link a bifolium element with a surface element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html
 */
export const AttrBifoliumSurfacesSchema = Type.Object(
	{
		/**
		 * A reference to a surface element positioned on the outer recto side of a (folded) sheet.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html
		 */
		"@outer.recto": Type.Optional(
			Type.String({
				format: "uri",
			}),
		),
		/**
		 * A reference to a surface element positioned on the outer recto side of a (folded) sheet.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html
		 */
		"@inner.verso": Type.Optional(
			Type.String({
				format: "uri",
			}),
		),
		/**
		 * A reference to a surface element positioned on the outer recto side of a (folded) sheet.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html
		 */
		"@inner.recto": Type.Optional(
			Type.String({
				format: "uri",
			}),
		),
		/**
		 * A reference to a surface element positioned on the outer recto side of a (folded) sheet.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html
		 */
		"@outer.verso": Type.Optional(
			Type.String({
				format: "uri",
			}),
		),
	},
	{ additionalProperties: false },
);
