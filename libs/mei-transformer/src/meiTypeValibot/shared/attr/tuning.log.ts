import * as v from "valibot";

/**
 * Logical domain attributes for tuning..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.log.html
 */
export const AttrTuningLogSchema = v.object({
	// Direct attributes
	/**
	 * Describes the tuning standard used.
	 */
	"@tuning.standard": v.optional(v.string()),
});

export type AttrTuningLogData = v.InferOutput<typeof AttrTuningLogSchema>;
