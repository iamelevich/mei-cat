import * as v from "valibot";
import { AttrAccidentalSchema } from "../attr/accidental";
import { AttrControlEventSchema } from "../attr/controlEvent";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accid.log.html
 */
export const AttrAccidLogSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalSchema.entries,
	...AttrControlEventSchema.entries,

	// Direct attributes
	/**
	 * Records the function of an accidental.
	 */
	"@func": v.optional(v.string()),
});

export type AttrAccidLogData = v.InferOutput<typeof AttrAccidLogSchema>;
