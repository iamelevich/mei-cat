import * as v from "valibot";

/**
 * Attributes that record the basic visual rendition of lines..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lineRend.base.html
 */
export const AttrLineRendBaseSchema = v.object({
	// Direct attributes
	/**
	 * Describes the style of a line.
	 */
	"@lform": v.optional(v.string()),
	/**
	 * Describes the number of segments into which a dashed or dotted line may be divided, or the number of "peaks" of a wavy line; a pair of space-separated values (minimum and maximum, respectively) provides a range between which a rendering system-supplied value may fall, while a single value indicates a fixed amount of space; that is, the minimum and maximum values are equal.
	 */
	"@lsegs": v.optional(v.string()),
	/**
	 * Captures the height of peaks of a wavy line.
	 */
	"@lwaveheight": v.optional(v.string()),
	/**
	 * Width of a line.
	 */
	"@lwidth": v.optional(v.string()),
});

export type AttrLineRendBaseData = v.InferOutput<typeof AttrLineRendBaseSchema>;
