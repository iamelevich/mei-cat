import * as v from "valibot";
import { AttrGeneticStateSchema } from "../../genetic";
import {
	AttrHandIdentSchema,
	AttrMetadataPointingSchema,
	AttrSequenceSchema,
} from "../../shared";

/**
 * Transcription attributes for genetic and editorial information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trans.html
 */
export const AttrTransSchema = v.object({
	...AttrGeneticStateSchema.entries,
	...AttrHandIdentSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrSequenceSchema.entries,
});

export type AttrTransData = v.InferOutput<typeof AttrTransSchema>;
