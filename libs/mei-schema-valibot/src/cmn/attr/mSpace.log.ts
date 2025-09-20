import * as v from "valibot";
import { AttrDurationAdditiveSchema } from "../../shared/attr/duration.additive";
import { AttrEventSchema } from "../../shared/attr/event";

/**
 * Logical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.log.html
 */
export const AttrMSpaceLogSchema = v.object({
	// Inherited attribute classes
	...AttrDurationAdditiveSchema.entries,
	...AttrEventSchema.entries,
});

export type AttrMSpaceLogData = v.InferOutput<typeof AttrMSpaceLogSchema>;
