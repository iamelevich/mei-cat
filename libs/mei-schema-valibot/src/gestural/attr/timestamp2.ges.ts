import * as v from "valibot";

/**
 * Attributes that record a performed (as opposed to notated) time stamp for the end of an event..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timestamp2.ges.html
 */
export const AttrTimestamp2GesSchema = v.object({
	// Direct attributes
	/**
	 * Encodes the ending point of an event, <abbr>i.e.</abbr>, a count of measures plus a beat location in the ending measure.
	 */
	"@tstamp2.ges": v.optional(v.string()),
	/**
	 * Records the ending point of an event in terms of ISO time.
	 */
	"@tstamp2.real": v.optional(v.string()),
});

export type AttrTimestamp2GesData = v.InferOutput<
	typeof AttrTimestamp2GesSchema
>;
