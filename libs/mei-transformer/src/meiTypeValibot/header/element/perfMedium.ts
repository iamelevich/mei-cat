import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	CastListSchema,
	ModelAnnotLikeSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import { PerfResListSchema } from ".";

/**
 * Base schema with attribute, to simplify types for PerfMediumSchema
 */
const PerfMediumBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Indicates the number and character of the performing forces used in a musical composition.
 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
 */
export const PerfMediumSchema = v.intersect([
	PerfMediumBaseSchema,
	v.object({
		/**
		 * Reference to element castList
		 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
		 */
		castList: v.optional(v.lazy(() => CastListSchema)),
		/**
		 * Reference to element perfResList
		 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
		 */
		perfResList: v.optional(v.lazy(() => PerfResListSchema)),
	}),
	ModelAnnotLikeSchema,
	ModelHeadLikeSchema,
]);

export type PerfMediumData = v.InferOutput<typeof PerfMediumSchema>;
