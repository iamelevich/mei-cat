import * as v from "valibot";
import { AttrRestLogCmnSchema } from "../../cmn/attr/rest.log.cmn";
import { AttrAugmentDotsSchema } from "../attr/augmentDots";
import { AttrCueSchema } from "../attr/cue";
import { AttrEventSchema } from "../attr/event";
import { AttrRestdurationLogSchema } from "../attr/restduration.log";

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
