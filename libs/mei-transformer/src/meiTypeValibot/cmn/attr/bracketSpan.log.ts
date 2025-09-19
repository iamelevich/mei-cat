import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.log.html
 */
export const AttrBracketSpanLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * Describes the function of the bracketed event sequence.
	 */
	"@func": v.optional(v.string()),
});

export type AttrBracketSpanLogData = v.InferOutput<
	typeof AttrBracketSpanLogSchema
>;
