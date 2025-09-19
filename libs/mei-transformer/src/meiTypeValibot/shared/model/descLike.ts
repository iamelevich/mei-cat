import * as v from "valibot";
import { type DescData, DescSchema } from "..";

/**
 * Groups elements which provide a description of their parent entity.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.descLike.html
 */
export const ModelDescLikeSchema: v.GenericSchema<ModelDescLikeData> = v.object(
	{
		/**
		 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
		 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
		 */
		desc: v.optional(
			v.union([v.lazy(() => DescSchema), v.array(v.lazy(() => DescSchema))]),
		),
	},
);

export type ModelDescLikeData = {
	desc?: DescData | DescData[];
};
