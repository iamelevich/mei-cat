import * as v from "valibot";
import { AttrTimestampGesSchema } from "../../gestural/attr/timestamp.ges";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";
import { AttrPartIdentSchema } from "../../shared/attr/partIdent";
import { AttrStaffIdentSchema } from "../../shared/attr/staffIdent";
import { AttrStartIdSchema } from "../../shared/attr/startId";
import { AttrTimestampLogSchema } from "../../shared/attr/timestamp.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.log.html
 */
export const AttrRehLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrStartIdSchema.entries,
	...AttrTimestampGesSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrRehLogData = v.InferOutput<typeof AttrRehLogSchema>;
