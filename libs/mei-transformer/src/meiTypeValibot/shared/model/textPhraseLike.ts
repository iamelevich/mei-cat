import * as v from "valibot";
import { PbLikeSchema } from "./pbLike";
import { TextPhraseLikeLimitedSchema } from "./textPhraseLike.limited";

/**
 * Groups elements that represent text phrase-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textPhraseLike.html
 */
export const TextPhraseLikeSchema = v.intersect([
	PbLikeSchema,
	TextPhraseLikeLimitedSchema,
]);

export type TextPhraseLikeData = v.InferOutput<typeof TextPhraseLikeSchema>;
