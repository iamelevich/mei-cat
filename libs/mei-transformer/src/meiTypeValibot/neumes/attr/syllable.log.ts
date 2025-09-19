import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syllable.log.html
 */
export const AttrSyllableLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
});

export type AttrSyllableLogData = v.InferOutput<typeof AttrSyllableLogSchema>;
