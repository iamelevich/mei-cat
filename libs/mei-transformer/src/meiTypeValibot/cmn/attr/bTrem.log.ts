import * as v from "valibot";
import {
	AttrAugmentDotsSchema,
	AttrDurationLogSchema,
	AttrEventSchema,
} from "../../shared";
import { AttrNumberedSchema } from "./numbered";
import { AttrTremFormSchema } from "./tremForm";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.log.html
 */
export const AttrBTremLogSchema = v.object({
	...AttrEventSchema.entries,
	...AttrAugmentDotsSchema.entries,
	...AttrDurationLogSchema.entries,
	...AttrNumberedSchema.entries,
	...AttrTremFormSchema.entries,
});

export type AttrBTremLogData = v.InferOutput<typeof AttrBTremLogSchema>;
