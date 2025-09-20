import * as v from "valibot";

/**
 * Vertical offset attributes requiring a pair of attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset2.vo.html
 */
export const AttrVisualOffset2VoSchema = v.object({
	// Direct attributes
	/**
	 * Records a vertical adjustment of a feature’s programmatically-determined end point.
	 */
	"@endvo": v.optional(v.string()),
	/**
	 * Records a vertical adjustment of a feature’s programmatically-determined start point.
	 */
	"@startvo": v.optional(v.string()),
});

export type AttrVisualOffset2VoData = v.InferOutput<
	typeof AttrVisualOffset2VoSchema
>;
