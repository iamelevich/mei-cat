import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDatableSchema,
	AttrLangSchema,
	EventListSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for TreatSchedSchema
 */
const TreatSchedBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Scheduled treatment, <abbr>e.g.</abbr>, de-acidification, restoration, etc., for an item.
 * @see https://music-encoding.org/guidelines/v5/elements/treatSched.html
 */
export const TreatSchedSchema = v.intersect([
	TreatSchedBaseSchema,
	v.object({
		/**
		 * Reference to element eventList
		 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
		 */
		eventList: v.optional(
			v.union([
				v.lazy(() => EventListSchema),
				v.array(v.lazy(() => EventListSchema)),
			]),
		),
	}),
	ModelHeadLikeSchema,
	ModelPLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type TreatSchedData = v.InferOutput<typeof TreatSchedSchema>;
