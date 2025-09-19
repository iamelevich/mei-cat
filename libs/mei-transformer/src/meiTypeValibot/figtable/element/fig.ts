import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrHorizontalAlignSchema,
	AttrVerticalAlignSchema,
	AttrXySchema,
	ModelCaptionLikeSchema,
	ModelScoreLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { FigDescSchema } from ".";
import { ModelGraphicLikeSchema } from "..";

/**
 * Base schema with attribute, to simplify types for FigSchema
 */
const FigBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHorizontalAlignSchema.entries,
	...AttrVerticalAlignSchema.entries,
	...AttrXySchema.entries,
});

/**
 * Groups elements representing or containing graphic information such as an illustration or figure.
 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
 */
export const FigSchema = v.intersect([
	FigBaseSchema,
	v.object({
		/**
		 * Reference to element figDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/figDesc.html
		 */
		figDesc: v.optional(
			v.union([
				v.lazy(() => FigDescSchema),
				v.array(v.lazy(() => FigDescSchema)),
			]),
		),
	}),
	ModelCaptionLikeSchema,
	ModelGraphicLikeSchema,
	ModelScoreLikeSchema,
]);

export type FigData = v.InferOutput<typeof FigSchema>;
