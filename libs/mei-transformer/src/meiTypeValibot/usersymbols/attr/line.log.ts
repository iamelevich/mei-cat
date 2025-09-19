import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Attributes for describing the logical behavior of a line..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.line.log.html
 */
export const AttrLineLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * Indicates the function of the line.
	 */
	"@func": v.optional(v.string()),
});

export type AttrLineLogData = v.InferOutput<typeof AttrLineLogSchema>;
