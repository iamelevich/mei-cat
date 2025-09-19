import * as v from "valibot";
import { type NumData, NumSchema } from "..";

/**
 * Groups elements that denote a number or a quantity.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.numLike.html
 */
export const ModelNumLikeSchema: v.GenericSchema<ModelNumLikeData> = v.object({
	/**
	 * Numeric information in any form.
	 * @see https://music-encoding.org/guidelines/v5/elements/num.html
	 */
	num: v.optional(
		v.union([v.lazy(() => NumSchema), v.array(v.lazy(() => NumSchema))]),
	),
});

export type ModelNumLikeData = {
	num?: NumData | NumData[];
};
