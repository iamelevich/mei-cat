import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { HeadSchema } from "../shared/head";
import { ExpressionSchema } from "./expression";

/**
 * Gathers bibliographic expression entities.
 * @see https://music-encoding.org/guidelines/v5/elements/expressionList.html
 */
export const ExpressionListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),

			// rng:zeroOrMore - model.expressionLike
			/**
			 * Intellectual or artistic realization of a work.
			 * @see https://music-encoding.org/guidelines/v5/elements/expression.html
			 */
			expression: Type.Optional(
				Type.Union([ExpressionSchema, Type.Array(ExpressionSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type ExpressionList = Static<typeof ExpressionListSchema>;
