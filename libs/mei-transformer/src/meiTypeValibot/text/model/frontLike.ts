import * as v from "valibot";
import { type FrontData, FrontSchema } from "..";

/**
 * Groups elements that may contain front matter.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.frontLike.html
 */
export const ModelFrontLikeSchema: v.GenericSchema<ModelFrontLikeData> =
	v.object({
		/**
		 * Bundles prefatory text found before the start of the musical text.
		 * @see https://music-encoding.org/guidelines/v5/elements/front.html
		 */
		front: v.optional(
			v.union([v.lazy(() => FrontSchema), v.array(v.lazy(() => FrontSchema))]),
		),
	});

export type ModelFrontLikeData = {
	front?: FrontData | FrontData[];
};
