import * as v from "valibot";

/**
 * Horizontal offset attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.ho.html
 */
export const AttrVisualOffsetHoSchema = v.object({
	// Direct attributes
	/**
	 * Records a horizontal adjustment to a feature’s programmatically-determined location in terms of staff interline distance; that is, in units of 1/2 the distance between adjacent staff lines.
	 */
	"@ho": v.optional(v.string()),
});

export type AttrVisualOffsetHoData = v.InferOutput<
	typeof AttrVisualOffsetHoSchema
>;
