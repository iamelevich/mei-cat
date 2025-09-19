import * as v from "valibot";
import { AttrDurationGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.ges.html
 */
export const AttrSpaceGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
});

export type AttrSpaceGesData = v.InferOutput<typeof AttrSpaceGesSchema>;
