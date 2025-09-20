import * as v from "valibot";
import { AttrDurationGesSchema } from "./duration.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuplet.ges.html
 */
export const AttrTupletGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
});

export type AttrTupletGesData = v.InferOutput<typeof AttrTupletGesSchema>;
