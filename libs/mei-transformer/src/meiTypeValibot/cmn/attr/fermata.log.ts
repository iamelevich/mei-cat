import * as v from "valibot";
import { AttrControlEventSchema, AttrStartEndIdSchema } from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.log.html
 */
export const AttrFermataLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrStartEndIdSchema.entries,
});

export type AttrFermataLogData = v.InferOutput<typeof AttrFermataLogSchema>;
