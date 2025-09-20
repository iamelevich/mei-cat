import * as v from "valibot";
import { AttrTimestampGesSchema } from "./timestamp.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.breath.ges.html
 */
export const AttrBreathGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestampGesSchema.entries,
});

export type AttrBreathGesData = v.InferOutput<typeof AttrBreathGesSchema>;
