import * as v from "valibot";

/**
 * Horizontal offset attributes requiring a pair of attributes specified in terms of time..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset2.to.html
 */
export const AttrVisualOffset2ToSchema = v.object({
	// Direct attributes
	/**
	 * Records a timestamp adjustment of a feature’s programmatically-determined end point.
	 */
	"@endto": v.optional(v.string()),
	/**
	 * Records a timestamp adjustment of a feature’s programmatically-determined start point.
	 */
	"@startto": v.optional(v.string()),
});

export type AttrVisualOffset2ToData = v.InferOutput<
	typeof AttrVisualOffset2ToSchema
>;
