import * as v from "valibot";
import { AttrTimestamp2GesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sp.ges.html
 */
export const AttrSpGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestamp2GesSchema.entries,
});

export type AttrSpGesData = v.InferOutput<typeof AttrSpGesSchema>;
