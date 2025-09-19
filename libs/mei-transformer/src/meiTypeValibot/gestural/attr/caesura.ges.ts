import * as v from "valibot";
import { AttrDurationGesSchema, AttrTimestampGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.caesura.ges.html
 */
export const AttrCaesuraGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrTimestampGesSchema.entries,
});

export type AttrCaesuraGesData = v.InferOutput<typeof AttrCaesuraGesSchema>;
