import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Container for intellectual or physical component parts of a bibliographic entity.
 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
 */
export const ComponentListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			// rng:zeroOrMore - model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// rng:zeroOrMore - model.workLike
			/**
			 * Provides a detailed description of a work — a distinct intellectual or artistic creation — specifically its history, language use, and high-level musical attributes (e.g., key, tempo, meter, medium of performance, and intended duration).
			 * @see https://music-encoding.org/guidelines/v5/elements/work.html
			 */
			work: Type.Optional(Type.Ref("work")),
			// rng:zeroOrMore - model.expressionLike
			/**
			 * Intellectual or artistic realization of a work.
			 * @see https://music-encoding.org/guidelines/v5/elements/expression.html
			 */
			expression: Type.Optional(
				Type.Union([
					Type.Ref("expression"),
					Type.Array(Type.Ref("expression")),
				]),
			),
			// rng:zeroOrMore - model.manifestationLike
			/**
			 * A bibliographic description of a physical embodiment of an expression of a work.
			 * @see https://music-encoding.org/guidelines/v5/elements/manifestation.html
			 */
			manifestation: Type.Optional(
				Type.Union([
					Type.Ref("manifestation"),
					Type.Array(Type.Ref("manifestation")),
				]),
			),
			// rng:zeroOrMore - model.itemLike
			/**
			 * Single instance or exemplar of a source/manifestation.
			 * @see https://music-encoding.org/guidelines/v5/elements/item.html
			 */
			item: Type.Optional(
				Type.Union([Type.Ref("item"), Type.Array(Type.Ref("item"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
