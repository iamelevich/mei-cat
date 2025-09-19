import * as v from "valibot";
import { AttrDurationGesSchema } from "../attr/duration.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.ges.html
 */
export const AttrMSpaceGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
});

export type AttrMSpaceGesData = v.InferOutput<typeof AttrMSpaceGesSchema>;
