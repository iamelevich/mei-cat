import * as v from "valibot";

/**
 * Attributes that express duration of rests in musical terms..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.restduration.log.html
 */
export const AttrRestdurationLogSchema = v.object({
	// Direct attributes
	/**
	 * Records the duration of a rest using the relative durational values provided by the data.DURATIONRESTS datatype.
	 */
	"@dur": v.optional(v.string()),
});

export type AttrRestdurationLogData = v.InferOutput<
	typeof AttrRestdurationLogSchema
>;
