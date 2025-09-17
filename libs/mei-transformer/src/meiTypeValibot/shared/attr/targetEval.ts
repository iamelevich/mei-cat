import * as v from "valibot";

/**
 * Attributes that specify target evaluation.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.targetEval.html
 */
export const AttrTargetEvalSchema = v.object({
	/**
	 * Specifies the intended meaning when a participant in a relationship is itself a pointer.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.targetEval.html#evaluate
	 */
	"@evaluate": v.optional(v.union([v.literal("all"), v.literal("one"), v.literal("none")])),
});

export type AttrTargetEvalData = v.InferOutput<typeof AttrTargetEvalSchema>;
