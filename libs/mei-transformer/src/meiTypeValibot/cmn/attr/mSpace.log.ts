import * as v from "valibot";
import { AttrDurationAdditiveSchema, AttrEventSchema } from "../../shared";

/**
 * Attributes for mSpace.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.log.html
 */
export const AttrMSpaceLogSchema = v.object({
	...AttrDurationAdditiveSchema.entries,
	...AttrEventSchema.entries,
});

export type AttrMSpaceLogData = v.InferOutput<typeof AttrMSpaceLogSchema>;
