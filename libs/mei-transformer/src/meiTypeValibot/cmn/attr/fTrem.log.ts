import * as v from "valibot";
import {
	AttrAugmentDotsSchema,
	AttrDurationLogSchema,
	AttrEventSchema,
} from "../../shared";
import { AttrTremFormSchema } from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fTrem.log.html
 */
export const AttrFTremLogSchema = v.object({
	// Inherited attribute classes
	...AttrAugmentDotsSchema.entries,
	...AttrDurationLogSchema.entries,
	...AttrEventSchema.entries,
	...AttrTremFormSchema.entries,
});

export type AttrFTremLogData = v.InferOutput<typeof AttrFTremLogSchema>;
