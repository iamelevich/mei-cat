import * as v from "valibot";
import { type LbData, LbSchema } from "..";

/**
 * Groups elements that function like line beginnings.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.lbLike.html
 */
export const ModelLbLikeSchema: v.GenericSchema<ModelLbLikeData> = v.object({
	/**
	 * An empty formatting element that forces text to begin on a new line.
	 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
	 */
	lb: v.optional(
		v.union([v.lazy(() => LbSchema), v.array(v.lazy(() => LbSchema))]),
	),
});

export type ModelLbLikeData = {
	lb?: LbData | LbData[];
};
