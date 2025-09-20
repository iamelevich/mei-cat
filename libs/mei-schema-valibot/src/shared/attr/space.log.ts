import * as v from "valibot";
import { AttrSpaceLogCmnSchema } from "../../cmn/attr/space.log.cmn";
import { AttrAugmentDotsSchema } from "./augmentDots";
import { AttrDurationLogSchema } from "./duration.log";
import { AttrEventSchema } from "./event";

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
