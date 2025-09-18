import * as v from "valibot";
import { TextComponentLikeSchema } from "../../shared/model/textComponentLike";
import { TextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";

/**
 * Groups elements that may appear as part of editorial and transcription elements in prose.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.text.html
 */
export const EditTransPartTextSchema = v.intersect([
	TextComponentLikeSchema,
	TextPhraseLikeLimitedSchema,
]);

export type EditTransPartTextData = v.InferOutput<
	typeof EditTransPartTextSchema
>;
