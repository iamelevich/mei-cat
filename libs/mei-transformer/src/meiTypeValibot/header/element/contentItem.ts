import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelTextComponentLikeSchema } from "../../shared/model/textComponentLike";
import { ModelTextPhraseLikeSchema } from "../../shared/model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for ContentItemSchema
 */
const ContentItemBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a single entry within a content description element.
 * @see https://music-encoding.org/guidelines/v5/elements/contentItem.html
 */
export const ContentItemSchema = v.lazy(() =>
	v.intersect([
		ContentItemBaseSchema,
		ModelEditLikeSchema,
		ModelTextComponentLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type ContentItemData = v.InferOutput<typeof ContentItemSchema>;
