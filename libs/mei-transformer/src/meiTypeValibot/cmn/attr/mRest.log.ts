import * as v from "valibot";
import {
	AttrCueSchema,
	AttrDurationAdditiveSchema,
	AttrEventSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.log.html
 */
export const AttrMRestLogSchema = v.object({
	// Inherited attribute classes
	...AttrCueSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrEventSchema.entries,
});

export type AttrMRestLogData = v.InferOutput<typeof AttrMRestLogSchema>;
