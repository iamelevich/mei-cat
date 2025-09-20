import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { CastListSchema } from "../../shared/element/castList";
import { ModelAnnotLikeSchema } from "../../shared/model/annotLike";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { PerfResListSchema } from "./perfResList";

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
export const PerfMediumSchema = v.lazy(() =>
	v.intersect([
		PerfMediumBaseSchema,
		v.object({
			/**
			 * Reference to element castList
			 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
			 */
			castList: v.optional(CastListSchema),
			/**
			 * Reference to element perfResList
			 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
			 */
			perfResList: v.optional(PerfResListSchema),
		}),
		ModelAnnotLikeSchema,
		ModelHeadLikeSchema,
	]),
);

export type PerfMediumData = v.InferOutput<typeof PerfMediumSchema>;
