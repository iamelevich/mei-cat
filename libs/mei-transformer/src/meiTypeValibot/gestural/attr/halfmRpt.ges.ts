import * as v from "valibot";
import { AttrDurationGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.halfmRpt.ges.html
 */
export const AttrHalfmRptGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
});

export type AttrHalfmRptGesData = v.InferOutput<typeof AttrHalfmRptGesSchema>;
