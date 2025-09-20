import * as v from "valibot";
import { AttrInstrumentIdentSchema } from "../../midi/attr/instrumentIdent";
import { AttrTimeBaseSchema } from "../../midi/attr/timeBase";
import { AttrTuningSchema } from "../../shared/attr/tuning";
import { AttrStringtabTuningSchema } from "../../stringtab/attr/stringtab.tuning";

/**
 * Gestural domain attributes for staffDef in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.ges.html
 */
export const AttrStaffDefGesSchema = v.object({
	// Inherited attribute classes
	...AttrInstrumentIdentSchema.entries,
	...AttrStringtabTuningSchema.entries,
	...AttrTimeBaseSchema.entries,
	...AttrTuningSchema.entries,
});

export type AttrStaffDefGesData = v.InferOutput<typeof AttrStaffDefGesSchema>;
