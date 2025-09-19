import * as v from "valibot";
import { AttrTimestamp2GesSchema } from "../attr/timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bend.ges.html
 */
export const AttrBendGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestamp2GesSchema.entries,

	// Direct attributes
	/**
	 * Records the amount of detuning. The decimal values should be rendered as a fraction (or an integer plus a fraction) along with the bend symbol.
	 */
	"@amount": v.optional(v.string()),
});

export type AttrBendGesData = v.InferOutput<typeof AttrBendGesSchema>;
