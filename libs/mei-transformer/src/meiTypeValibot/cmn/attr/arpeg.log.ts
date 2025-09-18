import * as v from "valibot";
import { AttrControlEventSchema, AttrStartIdSchema } from "../../shared";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.log.html
 */
export const AttrArpegLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrStartIdSchema.entries,

	/**
	 * Describes the direction in which an arpeggio is to be performed.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.log.html#order
	 */
	"@order": v.optional(
		v.union([v.literal("up"), v.literal("down"), v.literal("nonarp")]),
	),
});

export type AttrArpegLogData = v.InferOutput<typeof AttrArpegLogSchema>;
