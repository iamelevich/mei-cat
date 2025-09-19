import * as v from "valibot";
import { AttrTremMeasuredSchema } from "../../cmn/attr/tremMeasured";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fTrem.ges.html
 */
export const AttrFTremGesSchema = v.object({
	// Inherited attribute classes
	...AttrTremMeasuredSchema.entries,
});

export type AttrFTremGesData = v.InferOutput<typeof AttrFTremGesSchema>;
