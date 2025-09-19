import * as v from "valibot";
import { AttrAttackingSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mdiv.ges.html
 */
export const AttrMdivGesSchema = v.object({
	// Inherited attribute classes
	...AttrAttackingSchema.entries,
});

export type AttrMdivGesData = v.InferOutput<typeof AttrMdivGesSchema>;
