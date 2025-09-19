import * as v from "valibot";
import { AttrDurationGesSchema } from "../attr/duration.ges";
import { AttrTimestamp2GesSchema } from "../attr/timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.f.ges.html
 */
export const AttrFGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrFGesData = v.InferOutput<typeof AttrFGesSchema>;
