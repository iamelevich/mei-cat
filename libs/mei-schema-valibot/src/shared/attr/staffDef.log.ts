import * as v from "valibot";
import { AttrStaffDefLogCmnSchema } from "../../cmn/attr/staffDef.log.cmn";
import { AttrStaffDefLogMensuralSchema } from "../../mensural/attr/staffDef.log.mensural";
import { AttrCleffingLogSchema } from "./cleffing.log";
import { AttrDurationDefaultSchema } from "./duration.default";
import { AttrKeySigDefaultLogSchema } from "./keySigDefault.log";
import { AttrMeterSigDefaultLogSchema } from "./meterSigDefault.log";
import { AttrOctaveDefaultSchema } from "./octaveDefault";
import { AttrTranspositionSchema } from "./transposition";

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
	// ...AttrNotationTypeSchema.entries,
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
