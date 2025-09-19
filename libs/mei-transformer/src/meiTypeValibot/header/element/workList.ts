import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelHeadLikeSchema } from "../../shared";
import { WorkSchema } from ".";

/**
 * Base schema with attribute, to simplify types for WorkListSchema
 */
const WorkListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Grouping mechanism for information describing non-bibliographic aspects of a text.
 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
 */
export const WorkListSchema = v.intersect([
	WorkListBaseSchema,
	v.object({
		/**
		 * Reference to element work
		 * @see https://music-encoding.org/guidelines/v5/elements/work.html
		 */
		work: v.union([
			v.lazy(() => WorkSchema),
			v.array(v.lazy(() => WorkSchema)),
		]),
	}),
	ModelHeadLikeSchema,
]);

export type WorkListData = v.InferOutput<typeof WorkListSchema>;
