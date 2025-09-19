import * as v from "valibot";

/**
 * Attributes that identify a musical range in terms of musical time..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.origin.timestamp.log.html
 */
export const AttrOriginTimestampLogSchema = v.object({
	// Direct attributes
	/**
	 * encodes the starting point of musical material in terms of musical time, <abbr>i.e.</abbr>, a (potentially negative) count of measures plus a beat location.
	 */
	"@origin.tstamp": v.optional(v.string()),
	/**
	 * encodes the ending point of musical material in terms of musical time, <abbr>i.e.</abbr>, a count of measures plus a beat location. The values are relative to the measure identified by <att>origin.tstamp</att>.
	 */
	"@origin.tstamp2": v.optional(v.string()),
});

export type AttrOriginTimestampLogData = v.InferOutput<
	typeof AttrOriginTimestampLogSchema
>;
