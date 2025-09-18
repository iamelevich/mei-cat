import * as v from "valibot";

/**
 * Groups elements that represent expression-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.expressionLike.html
 */
export const ExpressionLikeSchema = v.object({
  // TODO: Add expression-like elements
});

export type ExpressionLikeData = v.InferOutput<typeof ExpressionLikeSchema>;
