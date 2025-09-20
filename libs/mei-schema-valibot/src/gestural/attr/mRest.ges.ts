import * as v from "valibot";
import { AttrDurationGesSchema } from "./duration.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.ges.html
 */
export const AttrMRestGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
});

export type AttrMRestGesData = v.InferOutput<typeof AttrMRestGesSchema>;
