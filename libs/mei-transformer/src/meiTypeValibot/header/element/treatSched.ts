import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDatableSchema } from "../../shared/attr/datable";
import { AttrLangSchema } from "../../shared/attr/lang";
import { EventListSchema } from "../../shared/element/eventList";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";

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
export const TreatSchedSchema = v.lazy(() =>
	v.intersect([
		TreatSchedBaseSchema,
		v.object({
			/**
			 * Reference to element eventList
			 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
			 */
			eventList: v.optional(
				v.union([EventListSchema, v.array(EventListSchema)]),
			),
		}),
		ModelHeadLikeSchema,
		ModelPLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type TreatSchedData = v.InferOutput<typeof TreatSchedSchema>;
