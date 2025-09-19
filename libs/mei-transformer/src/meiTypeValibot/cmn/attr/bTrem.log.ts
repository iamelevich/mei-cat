import * as v from "valibot";
import {
	AttrAugmentDotsSchema,
	AttrDurationLogSchema,
	AttrEventSchema,
} from "../../shared";
import { AttrNumberedSchema, AttrTremFormSchema } from "..";

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
