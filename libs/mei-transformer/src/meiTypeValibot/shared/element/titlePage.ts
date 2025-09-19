import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelTranscriptionLikeSchema } from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelFigureLikeSchema } from "../../figtable";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelImprintPartSchema,
	ModelMilestoneLikeTextSchema,
	ModelTextComponentLikeSchema,
	ModelTitlePagePartSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for TitlePageSchema
 */
const TitlePageBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a transcription of the title page of a text.
 * @see https://music-encoding.org/guidelines/v5/elements/titlePage.html
 */
export const TitlePageSchema = v.intersect([
	TitlePageBaseSchema,
	ModelFigureLikeSchema,
	ModelHeadLikeSchema,
	ModelImprintPartSchema,
	ModelMilestoneLikeTextSchema,
	ModelTextComponentLikeSchema,
	ModelTitlePagePartSchema,
	ModelTranscriptionLikeSchema,
]);

export type TitlePageData = v.InferOutput<typeof TitlePageSchema>;
