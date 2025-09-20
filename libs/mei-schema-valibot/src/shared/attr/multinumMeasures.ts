import * as v from "valibot";

/**
 * Attributes that indicate programmatic numbering..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multinumMeasures.html
 */
export const AttrMultinumMeasuresSchema = v.object({
	// Direct attributes
	/**
	 * Indicates whether programmatically calculated counts of multiple measures of rest (mRest) and whole measure repeats (mRpt) in parts should be rendered.
	 */
	"@multi.number": v.optional(v.string()),
});

export type AttrMultinumMeasuresData = v.InferOutput<
	typeof AttrMultinumMeasuresSchema
>;
