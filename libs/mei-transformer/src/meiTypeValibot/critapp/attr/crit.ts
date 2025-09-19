import * as v from "valibot";
import {
	AttrHandIdentSchema,
	AttrSequenceSchema,
	AttrSourceSchema,
} from "../../shared";

/**
 * Attributes common to all elements representing variant readings..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.crit.html
 */
export const AttrCritSchema = v.object({
	// Inherited attribute classes
	...AttrHandIdentSchema.entries,
	...AttrSequenceSchema.entries,
	...AttrSourceSchema.entries,

	// Direct attributes
	/**
	 * Classifies the cause for the variant reading, according to any appropriate typology of possible origins.
	 */
	"@cause": v.optional(v.string()),
});

export type AttrCritData = v.InferOutput<typeof AttrCritSchema>;
