import * as v from "valibot";
import { AttrDurationGesSchema } from "../attr/duration.ges";
import { AttrTimestamp2GesSchema } from "../attr/timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trill.ges.html
 */
export const AttrTrillGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrTrillGesData = v.InferOutput<typeof AttrTrillGesSchema>;
