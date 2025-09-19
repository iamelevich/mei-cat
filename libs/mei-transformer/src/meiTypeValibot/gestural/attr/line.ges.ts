import * as v from "valibot";
import { AttrDurationGesSchema, AttrTimestamp2GesSchema } from "..";

/**
 * Attributes for describing the performed components of a line..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.line.ges.html
 */
export const AttrLineGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrLineGesData = v.InferOutput<typeof AttrLineGesSchema>;
