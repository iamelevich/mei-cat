import * as v from "valibot";
import { AttrAccidentalSchema } from "../attr/accidental";
import { AttrPitchedSchema } from "../attr/pitched";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyAccid.log.html
 */
export const AttrKeyAccidLogSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalSchema.entries,
	...AttrPitchedSchema.entries,
});

export type AttrKeyAccidLogData = v.InferOutput<typeof AttrKeyAccidLogSchema>;
