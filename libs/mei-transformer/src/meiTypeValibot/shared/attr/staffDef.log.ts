import * as v from "valibot";
import { AttrStaffDefLogCmnSchema } from "../../cmn/attr/staffDef.log.cmn";
import { AttrStaffDefLogMensuralSchema } from "../../mensural/attr/staffDef.log.mensural";
import { AttrCleffingLogSchema } from "../attr/cleffing.log";
import { AttrDurationDefaultSchema } from "../attr/duration.default";
import { AttrKeySigDefaultLogSchema } from "../attr/keySigDefault.log";
import { AttrMeterSigDefaultLogSchema } from "../attr/meterSigDefault.log";
import { AttrOctaveDefaultSchema } from "../attr/octaveDefault";
import { AttrTranspositionSchema } from "../attr/transposition";

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
