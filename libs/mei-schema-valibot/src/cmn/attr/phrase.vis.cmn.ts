import * as v from "valibot";
import { AttrCurvatureSchema } from "../../shared/attr/curvature";
import { AttrLineRendBaseSchema } from "../../shared/attr/lineRend.base";

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
