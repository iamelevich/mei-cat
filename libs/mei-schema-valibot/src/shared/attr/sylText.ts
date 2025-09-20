import * as v from "valibot";

/**
 * Attributes that hold associated sung text syllables..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sylText.html
 */
export const AttrSylTextSchema = v.object({
	// Direct attributes
	/**
	 * Holds an associated sung text syllable.
	 */
	"@syl": v.optional(v.string()),
});

export type AttrSylTextData = v.InferOutput<typeof AttrSylTextSchema>;
