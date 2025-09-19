import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrTimestamp2LogSchema } from "../../shared/attr/timestamp2.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.log.html
 */
export const AttrPedalLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * Records the position of the piano damper pedal.
	 */
	"@dir": v.optional(v.string()),
	/**
	 * Indicates the function of the depressed pedal, but not necessarily the text associated with its use. Use the <gi scheme="MEI">dir</gi> element for such text.
	 */
	"@func": v.optional(v.string()),
});

export type AttrPedalLogData = v.InferOutput<typeof AttrPedalLogSchema>;
