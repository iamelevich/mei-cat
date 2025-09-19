import * as v from "valibot";

/**
 * Attributes that record a time stamp in terms of musical time, <abbr>i.e.</abbr>, beats[.fractional beat part]..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timestamp.log.html
 */
export const AttrTimestampLogSchema = v.object({
	// Direct attributes
	/**
	 * Encodes the onset time in terms of musical time, <abbr>i.e.</abbr>, beats[.fractional beat part], as expressed in the written time signature.
	 */
	"@tstamp": v.optional(v.string()),
});

export type AttrTimestampLogData = v.InferOutput<typeof AttrTimestampLogSchema>;
