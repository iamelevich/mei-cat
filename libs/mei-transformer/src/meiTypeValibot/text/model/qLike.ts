import * as v from "valibot";
import { type QData, QSchema } from "..";

/**
 * Groups elements related to highlighting which can appear at the phrase-level.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.qLike.html
 */
export const ModelQLikeSchema: v.GenericSchema<ModelQLikeData> = v.object({
	/**
	 * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method. Use quote for block-level quotations.
	 * @see https://music-encoding.org/guidelines/v5/elements/q.html
	 */
	q: v.optional(
		v.union([v.lazy(() => QSchema), v.array(v.lazy(() => QSchema))]),
	),
});

export type ModelQLikeData = {
	q?: QData | QData[];
};
