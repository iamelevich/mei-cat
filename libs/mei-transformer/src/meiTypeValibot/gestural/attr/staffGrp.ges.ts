import * as v from "valibot";
import { AttrInstrumentIdentSchema } from "../../midi";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGrp.ges.html
 */
export const AttrStaffGrpGesSchema = v.object({
	// Inherited attribute classes
	...AttrInstrumentIdentSchema.entries,
});

export type AttrStaffGrpGesData = v.InferOutput<typeof AttrStaffGrpGesSchema>;
