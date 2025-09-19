import * as v from "valibot";
import {
	AttrAccidentalSchema,
	AttrKeyModeSchema,
	AttrPitchSchema,
} from "../../shared";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySig.anl.html
 */
export const AttrKeySigAnlSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalSchema.entries,
	...AttrKeyModeSchema.entries,
	...AttrPitchSchema.entries,
});

export type AttrKeySigAnlData = v.InferOutput<typeof AttrKeySigAnlSchema>;
