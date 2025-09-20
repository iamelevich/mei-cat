import * as v from "valibot";

/**
 * Attributes that record a time stamp for the end of an event in terms of musical time..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timestamp2.log.html
 */
export const AttrTimestamp2LogSchema = v.object({
	// Direct attributes
	/**
	 * Encodes the ending point of an event, <abbr>i.e.</abbr>, a count of measures plus a beat location in the ending measure.
	 */
	"@tstamp2": v.optional(v.string()),
});

export type AttrTimestamp2LogData = v.InferOutput<
	typeof AttrTimestamp2LogSchema
>;
