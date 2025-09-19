import * as v from "valibot";
import { type CaptionData, CaptionSchema } from "../element/caption";

/**
 * Groups elements that contain the text of a caption or other text displayed along with a figure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.captionLike.html
 */
export const ModelCaptionLikeSchema: v.GenericSchema<ModelCaptionLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * A label which accompanies an illustration or a table.
			 * @see https://music-encoding.org/guidelines/v5/elements/caption.html
			 */
			caption: v.optional(v.union([CaptionSchema, v.array(CaptionSchema)])),
		}),
	);

export type ModelCaptionLikeData = {
	caption?: CaptionData | CaptionData[];
};
