import * as v from "valibot";
import { type PartsData, PartsSchema } from "..";

/**
 * Groups elements that collect separate performer parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.partsLike.html
 */
export const ModelPartsLikeSchema: v.GenericSchema<ModelPartsLikeData> =
	v.object({
		/**
		 * Provides a container for performers' parts.
		 * @see https://music-encoding.org/guidelines/v5/elements/parts.html
		 */
		parts: v.optional(
			v.union([v.lazy(() => PartsSchema), v.array(v.lazy(() => PartsSchema))]),
		),
	});

export type ModelPartsLikeData = {
	parts?: PartsData | PartsData[];
};
