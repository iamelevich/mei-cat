import * as v from "valibot";
import { AttrScoreDefLogCmnSchema } from "../../cmn/attr/scoreDef.log.cmn";
import { AttrScoreDefLogMensuralSchema } from "../../mensural/attr/scoreDef.log.mensural";
import { AttrCleffingLogSchema } from "../attr/cleffing.log";
import { AttrDurationDefaultSchema } from "../attr/duration.default";
import { AttrKeySigDefaultLogSchema } from "../attr/keySigDefault.log";
import { AttrMeterSigDefaultLogSchema } from "../attr/meterSigDefault.log";
import { AttrOctaveDefaultSchema } from "../attr/octaveDefault";
import { AttrTranspositionSchema } from "../attr/transposition";

/**
 * Logical domain attributes for scoreDef in the CMN repertoire. The values set in these attributes act as score-wide defaults for attributes that are not set in descendant elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.log.html
 */
export const AttrScoreDefLogSchema = v.object({
	// Inherited attribute classes
	...AttrCleffingLogSchema.entries,
	...AttrDurationDefaultSchema.entries,
	...AttrKeySigDefaultLogSchema.entries,
	...AttrMeterSigDefaultLogSchema.entries,
	...AttrOctaveDefaultSchema.entries,
	...AttrScoreDefLogCmnSchema.entries,
	...AttrScoreDefLogMensuralSchema.entries,
	...AttrTranspositionSchema.entries,
});

export type AttrScoreDefLogData = v.InferOutput<typeof AttrScoreDefLogSchema>;
