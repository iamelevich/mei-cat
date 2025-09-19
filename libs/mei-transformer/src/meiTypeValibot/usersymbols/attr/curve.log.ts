import * as v from "valibot";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curve.log.html
 */
export const AttrCurveLogSchema = v.object({
	// Inherited attribute classes
	...AttrStartEndIdSchema.entries,

	// Direct attributes
	/**
	 * Indicates the function of the curve.
	 */
	"@func": v.optional(v.string()),
});

export type AttrCurveLogData = v.InferOutput<typeof AttrCurveLogSchema>;
