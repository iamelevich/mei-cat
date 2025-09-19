import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import { TermListSchema } from ".";

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
export const ClassificationSchema = v.intersect([
	ClassificationBaseSchema,
	v.object({
		/**
		 * Reference to element termList
		 * @see https://music-encoding.org/guidelines/v5/elements/termList.html
		 */
		termList: v.union([
			v.lazy(() => TermListSchema),
			v.array(v.lazy(() => TermListSchema)),
		]),
	}),
	ModelHeadLikeSchema,
]);

export type ClassificationData = v.InferOutput<typeof ClassificationSchema>;
