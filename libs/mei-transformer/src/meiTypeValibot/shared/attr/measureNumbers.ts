import * as v from "valibot";

/**
 * Attributes pertaining to measure numbers.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measureNumbers.html
 */
export const AttrMeasureNumbersSchema = v.object({
	// Direct attributes
	/**
	 * Indicates whether measure numbers should be displayed.
	 */
	"@mnum.visible": v.optional(v.string()),
});

export type AttrMeasureNumbersData = v.InferOutput<
	typeof AttrMeasureNumbersSchema
>;
