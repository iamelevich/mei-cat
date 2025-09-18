import * as v from "valibot";

/**
 * Attributes for stems.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stems.cmn.html
 */
export const AttrStemsCmnSchema = v.object({
	/**
	 * Contains an indication of which staff a note or chord that logically belongs to the current staff should be visually placed on; that is, the one above or the one below.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stems.cmn.html#stem.with
	 */
	"@stem.with": v.optional(v.string()),
});

export type AttrStemsCmnData = v.InferOutput<typeof AttrStemsCmnSchema>;
