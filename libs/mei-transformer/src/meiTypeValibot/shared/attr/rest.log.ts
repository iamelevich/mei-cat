import * as v from "valibot";
import {
	AttrAugmentDotsSchema,
	AttrCueSchema,
	AttrEventSchema,
	AttrRestdurationLogSchema,
} from "..";
import { AttrRestLogCmnSchema } from "../../cmn";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.log.html
 */
export const AttrRestLogSchema = v.object({
	// Inherited attribute classes
	...AttrAugmentDotsSchema.entries,
	...AttrCueSchema.entries,
	...AttrEventSchema.entries,
	...AttrRestLogCmnSchema.entries,
	...AttrRestdurationLogSchema.entries,
});

export type AttrRestLogData = v.InferOutput<typeof AttrRestLogSchema>;
