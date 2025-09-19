import * as v from "valibot";

/**
 * Attributes that describe order within a collection of features..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sequence.html
 */
export const AttrSequenceSchema = v.object({
	// Direct attributes
	/**
	 * Used to assign a sequence number related to the order in which the encoded features carrying this attribute are believed to have occurred.
	 */
	"@seq": v.optional(v.string()),
});

export type AttrSequenceData = v.InferOutput<typeof AttrSequenceSchema>;
