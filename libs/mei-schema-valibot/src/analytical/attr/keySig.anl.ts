import * as v from "valibot";
import { AttrAccidentalSchema } from "../../shared/attr/accidental";
import { AttrKeyModeSchema } from "../../shared/attr/keyMode";
import { AttrPitchSchema } from "../../shared/attr/pitch";

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
