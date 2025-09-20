import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySig.log.html
 */
export const AttrKeySigLogSchema = v.object({
	// Direct attributes
	/**
	 * Written key signature.
	 */
	"@sig": v.optional(v.string()),
});

export type AttrKeySigLogData = v.InferOutput<typeof AttrKeySigLogSchema>;
