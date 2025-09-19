import * as v from "valibot";
import { AttrAugmentDotsSchema } from "../../shared/attr/augmentDots";
import { AttrDurationLogSchema } from "../../shared/attr/duration.log";
import { AttrEventSchema } from "../../shared/attr/event";
import { AttrNumberedSchema } from "../attr/numbered";
import { AttrTremFormSchema } from "../attr/tremForm";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.log.html
 */
export const AttrBTremLogSchema = v.object({
	// Inherited attribute classes
	...AttrAugmentDotsSchema.entries,
	...AttrDurationLogSchema.entries,
	...AttrEventSchema.entries,
	...AttrNumberedSchema.entries,
	...AttrTremFormSchema.entries,
});

export type AttrBTremLogData = v.InferOutput<typeof AttrBTremLogSchema>;
