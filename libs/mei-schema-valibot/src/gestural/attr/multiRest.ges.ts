import * as v from "valibot";
import { AttrDurationGesSchema } from "./duration.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.ges.html
 */
export const AttrMultiRestGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
});

export type AttrMultiRestGesData = v.InferOutput<typeof AttrMultiRestGesSchema>;
