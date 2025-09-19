import * as v from "valibot";
import { AttrEventSchema } from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.log.html
 */
export const AttrBeatRptLogSchema = v.object({
	// Inherited attribute classes
	...AttrEventSchema.entries,

	// Direct attributes
	/**
	 * Indicates the performed duration represented by the beatRpt symbol; expressed in time signature denominator units.
	 */
	"@beatdef": v.optional(v.string()),
});

export type AttrBeatRptLogData = v.InferOutput<typeof AttrBeatRptLogSchema>;
