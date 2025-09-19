import * as v from "valibot";
import { AttrSpaceLogCmnSchema } from "../../cmn";
import {
	AttrAugmentDotsSchema,
	AttrDurationLogSchema,
	AttrEventSchema,
} from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.log.html
 */
export const AttrSpaceLogSchema = v.object({
	// Inherited attribute classes
	...AttrAugmentDotsSchema.entries,
	...AttrDurationLogSchema.entries,
	...AttrEventSchema.entries,
	...AttrSpaceLogCmnSchema.entries,
});

export type AttrSpaceLogData = v.InferOutput<typeof AttrSpaceLogSchema>;
