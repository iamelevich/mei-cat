import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelFigureLikeSchema } from "../../figtable/model/figureLike";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { ModelHeadLikeSchema } from "../model/headLike";
import { ModelImprintPartSchema } from "../model/imprintPart";
import { ModelMilestoneLikeTextSchema } from "../model/milestoneLike.text";
import { ModelTextComponentLikeSchema } from "../model/textComponentLike";
import { ModelTitlePagePartSchema } from "../model/titlePagePart";

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
export const TitlePageSchema = v.lazy(() =>
	v.intersect([
		TitlePageBaseSchema,
		ModelFigureLikeSchema,
		ModelHeadLikeSchema,
		ModelImprintPartSchema,
		ModelMilestoneLikeTextSchema,
		ModelTextComponentLikeSchema,
		ModelTitlePagePartSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type TitlePageData = v.InferOutput<typeof TitlePageSchema>;
