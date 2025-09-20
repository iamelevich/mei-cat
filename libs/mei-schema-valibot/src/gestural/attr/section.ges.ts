import * as v from "valibot";
import { AttrAttackingSchema } from "./attacking";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.section.ges.html
 */
export const AttrSectionGesSchema = v.object({
	// Inherited attribute classes
	...AttrAttackingSchema.entries,
});

export type AttrSectionGesData = v.InferOutput<typeof AttrSectionGesSchema>;
