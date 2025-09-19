import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.log.html
 */
export const AttrAttaccaLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * Indicates the next section or movement to be performed.
	 */
	"@target": v.optional(v.string()),
});

export type AttrAttaccaLogData = v.InferOutput<typeof AttrAttaccaLogSchema>;
