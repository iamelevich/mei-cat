import * as v from "valibot";
import {
	AttrCleffingLogSchema,
	AttrDurationDefaultSchema,
	AttrKeySigDefaultLogSchema,
	AttrMeterSigDefaultLogSchema,
	AttrOctaveDefaultSchema,
	AttrTranspositionSchema,
} from "..";
import { AttrStaffDefLogCmnSchema } from "../../cmn";
import { AttrStaffDefLogMensuralSchema } from "../../mensural";

/**
 * Logical domain attributes for staffDef..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.log.html
 */
export const AttrStaffDefLogSchema = v.object({
	// Inherited attribute classes
	...AttrCleffingLogSchema.entries,
	...AttrDurationDefaultSchema.entries,
	...AttrKeySigDefaultLogSchema.entries,
	...AttrMeterSigDefaultLogSchema.entries,
	...AttrNotationTypeSchema.entries,
	...AttrOctaveDefaultSchema.entries,
	...AttrStaffDefLogCmnSchema.entries,
	...AttrStaffDefLogMensuralSchema.entries,
	...AttrTranspositionSchema.entries,

	// Direct attributes
	/**
	 * Indicates the number of staff lines.
	 */
	"@lines": v.optional(v.string()),
});

export type AttrStaffDefLogData = v.InferOutput<typeof AttrStaffDefLogSchema>;
