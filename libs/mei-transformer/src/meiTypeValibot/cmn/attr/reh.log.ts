import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";
import {
	AttrPartIdentSchema,
	AttrStaffIdentSchema,
	AttrStartIdSchema,
	AttrTimestampLogSchema,
} from "../../shared";

/**
 * Attributes for reh.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.log.html
 */
export const AttrRehLogSchema = v.object({
	...AttrAlignmentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrStartIdSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrRehLogData = v.InferOutput<typeof AttrRehLogSchema>;
