import * as v from "valibot";
import { AttrAccidentalGesSchema } from "../attr/accidental.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accid.ges.html
 */
export const AttrAccidGesSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalGesSchema.entries,
});

export type AttrAccidGesData = v.InferOutput<typeof AttrAccidGesSchema>;
