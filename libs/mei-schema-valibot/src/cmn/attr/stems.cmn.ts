import * as v from "valibot";

/**
 * Attributes that describe the properties of stemmed features; that is, chords and notes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stems.cmn.html
 */
export const AttrStemsCmnSchema = v.object({
	// Direct attributes
	/**
	 * Contains an indication of which staff a note or chord that logically belongs to the current staff should be visually placed on; that is, the one above or the one below.
	 */
	"@stem.with": v.optional(v.string()),
});

export type AttrStemsCmnData = v.InferOutput<typeof AttrStemsCmnSchema>;
