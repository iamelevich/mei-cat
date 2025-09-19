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
 * Base schema with attribute, to simplify types for AcquisitionSchema
 */
const AcquisitionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Records information concerning the process by which an item was acquired by the holding institution.
 * @see https://music-encoding.org/guidelines/v5/elements/acquisition.html
 */
export const AcquisitionSchema = v.intersect([
	AcquisitionBaseSchema,
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

export type AcquisitionData = v.InferOutput<typeof AcquisitionSchema>;
