import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrNameSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for GeogFeatSchema
 */
const GeogFeatBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * Contains a common noun identifying a geographical feature.
 * @see https://music-encoding.org/guidelines/v5/elements/geogFeat.html
 */
export const GeogFeatSchema = v.intersect([
	GeogFeatBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type GeogFeatData = v.InferOutput<typeof GeogFeatSchema>;
