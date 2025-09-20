import * as v from "valibot";
import { AttrTremMeasuredSchema } from "../../cmn/attr/tremMeasured";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.ges.html
 */
export const AttrBTremGesSchema = v.object({
	// Inherited attribute classes
	...AttrTremMeasuredSchema.entries,
});

export type AttrBTremGesData = v.InferOutput<typeof AttrBTremGesSchema>;
