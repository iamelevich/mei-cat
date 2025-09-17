import { Type } from "typebox";

/**
 * Attributes for bifolium surface references.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html
 */
export const AttrBifoliumSurfacesSchema = Type.Object(
	{
		/**
		 * A reference to a surface element positioned on the inner recto side of a (folded) sheet.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html#inner.recto
		 */
		"@inner.recto": Type.Optional(Type.String()),
		/**
		 * A reference to a surface element positioned on the inner verso side of a (folded) sheet.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html#inner.verso
		 */
		"@inner.verso": Type.Optional(Type.String()),
		/**
		 * A reference to a surface element positioned on the outer recto side of a (folded) sheet.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html#outer.recto
		 */
		"@outer.recto": Type.Optional(Type.String()),
		/**
		 * A reference to a surface element positioned on the outer verso side of a (folded) sheet.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html#outer.verso
		 */
		"@outer.verso": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
