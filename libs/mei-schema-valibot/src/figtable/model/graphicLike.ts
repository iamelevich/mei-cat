import * as v from "valibot";
import { type GraphicData, GraphicSchema } from "../element/graphic";

/**
 * Groups elements that indicate the location of an inline graphic, illustration, or figure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.graphicLike.html
 */
export const ModelGraphicLikeSchema: v.GenericSchema<ModelGraphicLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Indicates the location of an inline graphic.
			 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
			 */
			graphic: v.optional(v.union([v.array(GraphicSchema), GraphicSchema])),
		}),
	);

export type ModelGraphicLikeData = {
	graphic?: GraphicData | GraphicData[];
};
