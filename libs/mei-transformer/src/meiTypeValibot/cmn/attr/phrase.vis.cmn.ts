import * as v from "valibot";
import { AttrCurvatureSchema, AttrLineRendBaseSchema } from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.phrase.vis.cmn.html
 */
export const AttrPhraseVisCmnSchema = v.object({
	// Inherited attribute classes
	...AttrCurvatureSchema.entries,
	...AttrLineRendBaseSchema.entries,
});

export type AttrPhraseVisCmnData = v.InferOutput<typeof AttrPhraseVisCmnSchema>;
