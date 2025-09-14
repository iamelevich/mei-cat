import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrHorizontalAlignSchema } from "../shared/attr/horizontalAlign";
import { AttrVerticalAlignSchema } from "../shared/attr/verticalAlign";
import { AttrXySchema } from "../shared/attr/xy";
import { CaptionSchema } from "../shared/caption";
import { ScoreSchema } from "../shared/score";
import { FigDescSchema } from "./figDesc";
import { GraphicSchema } from "./graphic";

/**
 * Groups elements representing or containing graphic information such as an illustration or figure.
 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
 */
export const FigSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrFacsimileSchema,
	AttrHorizontalAlignSchema,
	AttrVerticalAlignSchema,
	AttrXySchema,
	Type.Object(
		{
			// Child elements - zero or more of each
			// Note: This implements the key child elements according to MEI spec

			/**
			 * Figure description.
			 * @see https://music-encoding.org/guidelines/v5/elements/figDesc.html
			 */
			figDesc: Type.Optional(
				Type.Union([FigDescSchema, Type.Array(FigDescSchema)]),
			),

			/**
			 * Caption.
			 * @see https://music-encoding.org/guidelines/v5/elements/caption.html
			 */
			caption: Type.Optional(
				Type.Union([CaptionSchema, Type.Array(CaptionSchema)]),
			),

			/**
			 * Graphic.
			 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
			 */
			graphic: Type.Optional(
				Type.Union([GraphicSchema, Type.Array(GraphicSchema)]),
			),

			/**
			 * Score.
			 * @see https://music-encoding.org/guidelines/v5/elements/score.html
			 */
			score: Type.Optional(Type.Union([ScoreSchema, Type.Array(ScoreSchema)])),

			// Note: The fig element can contain elements from model.captionLike, model.graphicLike, and model.scoreLike
			// according to the MEI spec. Additional elements can be added as needed.
		},
		{ additionalProperties: false },
	),
]);

export type Fig = Static<typeof FigSchema>;
