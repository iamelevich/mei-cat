import * as v from "valibot";
import { AttrInstrumentIdentSchema, AttrTimeBaseSchema } from "../../midi";
import { AttrTuningSchema } from "../../shared";
import { AttrStringtabTuningSchema } from "../../stringtab";

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
