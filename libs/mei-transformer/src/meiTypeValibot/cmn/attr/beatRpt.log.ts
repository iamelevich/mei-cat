import * as v from "valibot";
import { AttrEventSchema } from "../../shared";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.log.html
 */
export const AttrBeatRptLogSchema = v.object({
	...AttrEventSchema.entries,

	/**
	 * Indicates the performed duration represented by the beatRpt symbol; expressed in time signature denominator units.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.log.html#beatdef
	 */
	"@beatdef": v.optional(v.pipe(v.string(), v.regex(/^\d+(\.\d+)?$/))),
});

export type AttrBeatRptLogData = v.InferOutput<typeof AttrBeatRptLogSchema>;
