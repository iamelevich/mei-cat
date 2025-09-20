import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";
import { AttrLayerIdentSchema } from "../../shared/attr/layerIdent";
import { AttrPartIdentSchema } from "../../shared/attr/partIdent";
import { AttrStaffIdentSchema } from "../../shared/attr/staffIdent";
import { AttrStartIdSchema } from "../../shared/attr/startId";
import { AttrTimestampLogSchema } from "../../shared/attr/timestamp.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.breath.log.html
 */
export const AttrBreathLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrStartIdSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrBreathLogData = v.InferOutput<typeof AttrBreathLogSchema>;
