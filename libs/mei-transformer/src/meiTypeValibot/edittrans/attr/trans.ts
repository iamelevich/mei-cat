import * as v from "valibot";
import { AttrGeneticStateSchema } from "../../genetic";
import {
	AttrHandIdentSchema,
	AttrMetadataPointingSchema,
	AttrSequenceSchema,
} from "../../shared";

/**
 * Attributes for elements encoding authorial or scribal intervention when transcribing manuscript or similar sources..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trans.html
 */
export const AttrTransSchema = v.object({
	// Inherited attribute classes
	...AttrGeneticStateSchema.entries,
	...AttrHandIdentSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrSequenceSchema.entries,
});

export type AttrTransData = v.InferOutput<typeof AttrTransSchema>;
