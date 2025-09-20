import * as v from "valibot";

/**
 * Attributes that link a bifolium element with a <gi scheme="MEI">surface</gi> element..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bifoliumSurfaces.html
 */
export const AttrBifoliumSurfacesSchema = v.object({
	// Direct attributes
	/**
	 * A reference to a <gi scheme="MEI">surface</gi> element positioned on the inner recto side of a (folded) sheet.
	 */
	"@inner.recto": v.optional(v.string()),
	/**
	 * A reference to a <gi scheme="MEI">surface</gi> element positioned on the inner verso side of a (folded) sheet.
	 */
	"@inner.verso": v.optional(v.string()),
	/**
	 * A reference to a <gi scheme="MEI">surface</gi> element positioned on the outer recto side of a (folded) sheet.
	 */
	"@outer.recto": v.optional(v.string()),
	/**
	 * A reference to a <gi scheme="MEI">surface</gi> element positioned on the outer verso side of a (folded) sheet.
	 */
	"@outer.verso": v.optional(v.string()),
});

export type AttrBifoliumSurfacesData = v.InferOutput<
	typeof AttrBifoliumSurfacesSchema
>;
