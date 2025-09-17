import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Gathers bibliographic expression entities.
 * @see https://music-encoding.org/guidelines/v5/elements/expressionList.html
 */
export const ExpressionListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,

	// Content model according to MEI spec:
	// rng:zeroOrMore - model.headLike
	/**
	 * Contains any heading, for example, the title of a section of text, or the heading of a list.
	 * @see https://music-encoding.org/guidelines/v5/elements/head.html
	 */
	head: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// rng:zeroOrMore - model.expressionLike
	/**
	 * Intellectual or artistic realization of a work.
	 * @see https://music-encoding.org/guidelines/v5/elements/expression.html
	 */
	expression: v.optional(
		v.union([
			v.lazy(() => ExpressionSchema),
			v.array(v.lazy(() => ExpressionSchema)),
		]),
	),
});

export type ExpressionListData = v.InferOutput<typeof ExpressionListSchema>;

// Forward reference for ExpressionSchema
import { ExpressionSchema } from "./expression";
