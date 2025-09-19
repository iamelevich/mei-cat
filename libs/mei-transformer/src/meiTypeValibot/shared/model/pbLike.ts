import * as v from "valibot";
import { type PbData, PbSchema } from "../element/pb";

/**
 * Groups page beginning-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.pbLike.html
 */
export const ModelPbLikeSchema: v.GenericSchema<ModelPbLikeData> = v.lazy(() =>
	v.object({
		/**
		 * An empty formatting element that forces text to begin on a new page.
		 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
		 */
		pb: v.optional(v.union([v.array(PbSchema), PbSchema])),
	}),
);

export type ModelPbLikeData = {
	pb?: PbData | PbData[];
};
