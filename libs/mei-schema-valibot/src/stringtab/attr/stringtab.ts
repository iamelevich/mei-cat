import * as v from "valibot";

/**
 * String tablature string and fret information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stringtab.html
 */
export const AttrStringtabSchema = v.object({
	// Direct attributes
	/**
	 * Records which course is to be played.
	 */
	"@tab.course": v.optional(v.string()),
	/**
	 * This attribute is deprecated and will be removed in a future version. Indicates which finger, if any, should be used to play an individual string. The index, middle, ring, and little fingers are represented by the values 1-4, while <val>t</val> is for the thumb. The values <val>x</val> and <val>o</val> indicate muffled and open strings, respectively.
	 */
	"@tab.fing": v.optional(v.string()),
	/**
	 * Records the location at which a string should be stopped against a fret.
	 */
	"@tab.fret": v.optional(v.string()),
	/**
	 * Used in German lute tablature in cases where vertical positioning deviates from the norm which can be specified by <att>tab.align</att>. Indicates the position of the tab note on one of the horizontal strands corresponding to the <att>lines</att> attribute on <gi scheme="MEI">staffDef</gi>. (Note that in this case, the lines are conceptual rather than visible).
	 */
	"@tab.line": v.optional(v.string()),
	/**
	 * This attribute is deprecated in favor of <att>tab.course</att> and will be removed in a future version. Records which string is to be played.
	 */
	"@tab.string": v.optional(v.string()),
});

export type AttrStringtabData = v.InferOutput<typeof AttrStringtabSchema>;
