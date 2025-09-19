import * as v from "valibot";
import { type ExpressionData, ExpressionSchema } from "../element/expression";

/**
 * Collects FRBR expression-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.expressionLike.html
 */
export const ModelExpressionLikeSchema: v.GenericSchema<ModelExpressionLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Intellectual or artistic realization of a work.
			 * @see https://music-encoding.org/guidelines/v5/elements/expression.html
			 */
			expression: v.optional(
				v.union([ExpressionSchema, v.array(ExpressionSchema)]),
			),
		}),
	);

export type ModelExpressionLikeData = {
	expression?: ExpressionData | ExpressionData[];
};
