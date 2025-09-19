import * as v from "valibot";
import { AttrTimestamp2GesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tie.ges.html
 */
export const AttrTieGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestamp2GesSchema.entries,
});

export type AttrTieGesData = v.InferOutput<typeof AttrTieGesSchema>;
