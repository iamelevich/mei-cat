import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";
import {
	AttrPartIdentSchema,
	AttrStaffIdentSchema,
	AttrStartIdSchema,
	AttrTimestampLogSchema,
} from "../../shared";
import { AttrTimestampGesSchema } from "../../gestural";

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
