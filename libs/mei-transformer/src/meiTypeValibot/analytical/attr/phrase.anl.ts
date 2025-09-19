import * as v from "valibot";
import { AttrJoinedSchema } from "../../shared";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.phrase.anl.html
 */
export const AttrPhraseAnlSchema = v.object({
	// Inherited attribute classes
	...AttrJoinedSchema.entries,
});

export type AttrPhraseAnlData = v.InferOutput<typeof AttrPhraseAnlSchema>;
