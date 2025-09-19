import * as v from "valibot";
import { AttrAccidentalSchema, AttrPitchedSchema } from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.custos.log.html
 */
export const AttrCustosLogSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalSchema.entries,
	...AttrPitchedSchema.entries,

	// Direct attributes
	/**
	 * Encodes the target note when its pitch differs from the pitch at which the custos appears.
	 */
	"@target": v.optional(v.string()),
});

export type AttrCustosLogData = v.InferOutput<typeof AttrCustosLogSchema>;
