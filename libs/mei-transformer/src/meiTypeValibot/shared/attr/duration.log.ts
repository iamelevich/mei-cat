import * as v from "valibot";

/**
 * Attributes that express duration in musical terms..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.log.html
 */
export const AttrDurationLogSchema = v.object({
	// Direct attributes
	/**
	 * Records the duration of a feature using the relative durational values provided by the data.DURATION datatype.
	 */
	"@dur": v.optional(v.string()),
});

export type AttrDurationLogData = v.InferOutput<typeof AttrDurationLogSchema>;
