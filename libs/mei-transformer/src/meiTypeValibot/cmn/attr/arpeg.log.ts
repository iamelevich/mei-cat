import * as v from "valibot";
import { AttrControlEventSchema, AttrStartIdSchema } from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.log.html
 */
export const AttrArpegLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrStartIdSchema.entries,

	// Direct attributes
	/**
	 * Describes the direction in which an arpeggio is to be performed.
	 */
	"@order": v.optional(v.string()),
});

export type AttrArpegLogData = v.InferOutput<typeof AttrArpegLogSchema>;
