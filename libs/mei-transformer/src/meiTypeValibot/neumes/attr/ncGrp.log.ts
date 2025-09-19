import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";
import {
	AttrLayerIdentSchema,
	AttrStaffIdentSchema,
	AttrSylTextSchema,
} from "../../shared";

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
