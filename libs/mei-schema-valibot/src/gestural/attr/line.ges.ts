import * as v from "valibot";
import { AttrDurationGesSchema } from "./duration.ges";
import { AttrTimestamp2GesSchema } from "./timestamp2.ges";

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
