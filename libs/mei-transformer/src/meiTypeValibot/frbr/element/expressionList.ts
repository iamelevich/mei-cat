import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelHeadLikeSchema } from "../../shared";
import { ModelExpressionLikeSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ExpressionListSchema
 */
const ExpressionListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Gathers bibliographic expression entities.
 * @see https://music-encoding.org/guidelines/v5/elements/expressionList.html
 */
export const ExpressionListSchema = v.intersect([
	ExpressionListBaseSchema,
	ModelExpressionLikeSchema,
	ModelHeadLikeSchema,
]);

export type ExpressionListData = v.InferOutput<typeof ExpressionListSchema>;
