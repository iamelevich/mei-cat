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
 * Base schema with attribute, to simplify types for TreatHistSchema
 */
const TreatHistBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A record of the treatment the item has undergone (<abbr>e.g.</abbr>, de-acidification, restoration, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/treatHist.html
 */
export const TreatHistSchema = v.intersect([
	TreatHistBaseSchema,
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

export type TreatHistData = v.InferOutput<typeof TreatHistSchema>;
