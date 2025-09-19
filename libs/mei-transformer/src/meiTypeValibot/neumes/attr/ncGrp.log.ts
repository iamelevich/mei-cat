import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";
import { AttrLayerIdentSchema } from "../../shared/attr/layerIdent";
import { AttrStaffIdentSchema } from "../../shared/attr/staffIdent";
import { AttrSylTextSchema } from "../../shared/attr/sylText";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncGrp.log.html
 */
export const AttrNcGrpLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrSylTextSchema.entries,
});

export type AttrNcGrpLogData = v.InferOutput<typeof AttrNcGrpLogSchema>;
