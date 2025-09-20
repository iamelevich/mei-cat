import * as v from "valibot";

/**
 * Attributes that deal with resolution of values in plist or target attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.targetEval.html
 */
export const AttrTargetEvalSchema = v.object({
	// Direct attributes
	/**
	 * Specifies the intended meaning when a participant in a relationship is itself a pointer.
	 */
	"@evaluate": v.optional(v.string()),
});

export type AttrTargetEvalData = v.InferOutput<typeof AttrTargetEvalSchema>;
