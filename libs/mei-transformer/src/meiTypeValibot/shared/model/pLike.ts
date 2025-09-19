import * as v from "valibot";
import { type PData, PSchema } from "..";

/**
 * Groups paragraph-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.pLike.html
 */
export const ModelPLikeSchema: v.GenericSchema<ModelPLikeData> = v.object({
	/**
	 * One or more text phrases that form a logical prose passage.
	 * @see https://music-encoding.org/guidelines/v5/elements/p.html
	 */
	p: v.optional(
		v.union([v.lazy(() => PSchema), v.array(v.lazy(() => PSchema))]),
	),
});

export type ModelPLikeData = {
	p?: PData | PData[];
};
