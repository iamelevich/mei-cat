import * as v from "valibot";
import { type AnnotData, AnnotSchema } from "..";

/**
 * Groups annotation-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.annotLike.html
 */
export const ModelAnnotLikeSchema: v.GenericSchema<ModelAnnotLikeData> =
	v.object({
		/**
		 * Provides a statement explaining the text or indicating the basis for an assertion.
		 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
		 */
		annot: v.optional(
			v.union([v.lazy(() => AnnotSchema), v.array(v.lazy(() => AnnotSchema))]),
		),
	});

export type ModelAnnotLikeData = {
	annot?: AnnotData | AnnotData[];
};
