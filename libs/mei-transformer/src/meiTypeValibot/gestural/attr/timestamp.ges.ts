import * as v from "valibot";

/**
 * Attributes that record a performed (as opposed to notated) time stamp..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timestamp.ges.html
 */
export const AttrTimestampGesSchema = v.object({
	// Direct attributes
	/**
	 * Encodes the onset time in terms of musical time, <abbr>i.e.</abbr>, beats[.fractional beat part], as expressed in the written time signature.
	 */
	"@tstamp.ges": v.optional(v.string()),
	/**
	 * Records the onset time in terms of ISO time.
	 */
	"@tstamp.real": v.optional(v.string()),
});

export type AttrTimestampGesData = v.InferOutput<typeof AttrTimestampGesSchema>;
