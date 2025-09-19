import * as v from "valibot";
import { AttrDurationGesSchema } from "../attr/duration.ges";
import { AttrTimestamp2GesSchema } from "../attr/timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fingGrp.ges.html
 */
export const AttrFingGrpGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrFingGrpGesData = v.InferOutput<typeof AttrFingGrpGesSchema>;
