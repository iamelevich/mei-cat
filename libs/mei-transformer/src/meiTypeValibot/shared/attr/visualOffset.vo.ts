import * as v from "valibot";

/**
 * Vertical offset attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.vo.html
 */
export const AttrVisualOffsetVoSchema = v.object({
	// Direct attributes
	/**
	 * Records the vertical adjustment of a feature’s programmatically-determined location in terms of staff interline distance; that is, in units of 1/2 the distance between adjacent staff lines.
	 */
	"@vo": v.optional(v.string()),
});

export type AttrVisualOffsetVoData = v.InferOutput<
	typeof AttrVisualOffsetVoSchema
>;
