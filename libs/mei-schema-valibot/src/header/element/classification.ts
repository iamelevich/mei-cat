import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { TermListSchema } from "./termList";

/**
 * Base schema with attribute, to simplify types for ClassificationSchema
 */
const ClassificationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
});

/**
 * Groups information which describes the nature or topic of an entity.
 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
 */
export const ClassificationSchema = v.lazy(() =>
	v.intersect([
		ClassificationBaseSchema,
		v.object({
			/**
			 * Reference to element termList
			 * @see https://music-encoding.org/guidelines/v5/elements/termList.html
			 */
			termList: v.optional(v.union([v.array(TermListSchema), TermListSchema])),
		}),
		ModelHeadLikeSchema,
	]),
);

export type ClassificationData = v.InferOutput<typeof ClassificationSchema>;
