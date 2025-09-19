import * as v from "valibot";
import { AttrDurationGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.ges.html
 */
export const AttrFermataGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
});

export type AttrFermataGesData = v.InferOutput<typeof AttrFermataGesSchema>;
