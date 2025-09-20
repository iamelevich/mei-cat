import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syl.log.html
 */
export const AttrSylLogSchema = v.object({
	// Direct attributes
	/**
	 * Describes the symbols typically used to indicate breaks between syllables and their functions.
	 */
	"@con": v.optional(v.string()),
	/**
	 * Records the position of a syllable within a word.
	 */
	"@wordpos": v.optional(v.string()),
});

export type AttrSylLogData = v.InferOutput<typeof AttrSylLogSchema>;
