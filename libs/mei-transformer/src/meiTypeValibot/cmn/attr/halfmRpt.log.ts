import * as v from "valibot";
import { AttrDurationAdditiveSchema, AttrEventSchema } from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.halfmRpt.log.html
 */
export const AttrHalfmRptLogSchema = v.object({
	// Inherited attribute classes
	...AttrDurationAdditiveSchema.entries,
	...AttrEventSchema.entries,
});

export type AttrHalfmRptLogData = v.InferOutput<typeof AttrHalfmRptLogSchema>;
