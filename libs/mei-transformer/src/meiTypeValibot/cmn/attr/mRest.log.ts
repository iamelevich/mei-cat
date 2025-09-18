import * as v from "valibot";
import {
	AttrCueSchema,
	AttrDurationAdditiveSchema,
	AttrEventSchema,
} from "../../shared";

/**
 * Attributes for mRest.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.log.html
 */
export const AttrMRestLogSchema = v.object({
	...AttrCueSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrEventSchema.entries,
});

export type AttrMRestLogData = v.InferOutput<typeof AttrMRestLogSchema>;
