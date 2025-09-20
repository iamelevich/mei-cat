import * as v from "valibot";
import { AttrControlEventSchema } from "./controlEvent";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.log.html
 */
export const AttrDotLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,

	// Direct attributes
	/**
	 * Records the function of the dot.
	 */
	"@form": v.optional(v.string()),
});

export type AttrDotLogData = v.InferOutput<typeof AttrDotLogSchema>;
