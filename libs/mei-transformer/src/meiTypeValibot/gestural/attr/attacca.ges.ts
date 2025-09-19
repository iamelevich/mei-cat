import * as v from "valibot";
import { AttrTimestamp2GesSchema } from "../attr/timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.ges.html
 */
export const AttrAttaccaGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestamp2GesSchema.entries,
});

export type AttrAttaccaGesData = v.InferOutput<typeof AttrAttaccaGesSchema>;
