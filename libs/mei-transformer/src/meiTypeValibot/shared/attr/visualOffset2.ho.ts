import * as v from "valibot";

/**
 * Horizontal offset requiring a pair of attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset2.ho.html
 */
export const AttrVisualOffset2HoSchema = v.object({
	// Direct attributes
	/**
	 * Records the horizontal adjustment of a feature’s programmatically-determined end point.
	 */
	"@endho": v.optional(v.string()),
	/**
	 * Records the horizontal adjustment of a feature’s programmatically-determined start point.
	 */
	"@startho": v.optional(v.string()),
});

export type AttrVisualOffset2HoData = v.InferOutput<
	typeof AttrVisualOffset2HoSchema
>;
