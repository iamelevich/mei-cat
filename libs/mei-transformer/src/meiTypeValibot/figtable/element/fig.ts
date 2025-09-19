import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrHorizontalAlignSchema } from "../../shared/attr/horizontalAlign";
import { AttrVerticalAlignSchema } from "../../shared/attr/verticalAlign";
import { AttrXySchema } from "../../shared/attr/xy";
import { ModelCaptionLikeSchema } from "../../shared/model/captionLike";
import { ModelScoreLikeSchema } from "../../shared/model/scoreLike";
import { FigDescSchema } from "../element/figDesc";
import { ModelGraphicLikeSchema } from "../model/graphicLike";

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
export const FigSchema = v.lazy(() =>
	v.intersect([
		FigBaseSchema,
		v.object({
			/**
			 * Reference to element figDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/figDesc.html
			 */
			figDesc: v.optional(v.union([FigDescSchema, v.array(FigDescSchema)])),
		}),
		ModelCaptionLikeSchema,
		ModelGraphicLikeSchema,
		ModelScoreLikeSchema,
	]),
);

export type FigData = v.InferOutput<typeof FigSchema>;
