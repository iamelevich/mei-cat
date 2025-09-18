import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.log.html
 */
export const AttrBracketSpanLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	/**
	 * Describes the function of the bracketed event sequence.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.log.html#func
	 */
	"@func": v.union([
		v.literal("coloration"),
		v.literal("cross-rhythm"),
		v.literal("ligature"),
		v.literal("unspecified"),
	]),
});

export type AttrBracketSpanLogData = v.InferOutput<
	typeof AttrBracketSpanLogSchema
>;
