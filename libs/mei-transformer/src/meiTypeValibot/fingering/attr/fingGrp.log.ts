import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fingGrp.log.html
 */
export const AttrFingGrpLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * alternation of fingers.
	 */
	"@form": v.optional(v.string()),
});

export type AttrFingGrpLogData = v.InferOutput<typeof AttrFingGrpLogSchema>;
