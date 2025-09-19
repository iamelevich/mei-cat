import * as v from "valibot";
import { type PartData, PartSchema } from "..";

/**
 * Groups elements that represent a separate performer part.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.partLike.html
 */
export const ModelPartLikeSchema: v.GenericSchema<ModelPartLikeData> = v.object(
	{
		/**
		 * An alternative visual rendition of the score from the point of view of a particular performer (or group of performers).
		 * @see https://music-encoding.org/guidelines/v5/elements/part.html
		 */
		part: v.optional(
			v.union([v.lazy(() => PartSchema), v.array(v.lazy(() => PartSchema))]),
		),
	},
);

export type ModelPartLikeData = {
	part?: PartData | PartData[];
};
