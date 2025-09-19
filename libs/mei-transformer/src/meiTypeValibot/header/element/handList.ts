import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	LabelSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import { HandSchema } from ".";

/**
 * Base schema with attribute, to simplify types for HandListSchema
 */
const HandListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Container for one or more hand elements.
 * @see https://music-encoding.org/guidelines/v5/elements/handList.html
 */
export const HandListSchema = v.intersect([
	HandListBaseSchema,
	v.object({
		/**
		 * Reference to element hand
		 * @see https://music-encoding.org/guidelines/v5/elements/hand.html
		 */
		hand: v.optional(
			v.union([v.lazy(() => HandSchema), v.array(v.lazy(() => HandSchema))]),
		),
		/**
		 * Reference to element label
		 * @see https://music-encoding.org/guidelines/v5/elements/label.html
		 */
		label: v.optional(
			v.union([v.lazy(() => LabelSchema), v.array(v.lazy(() => LabelSchema))]),
		),
	}),
	ModelHeadLikeSchema,
]);

export type HandListData = v.InferOutput<typeof HandListSchema>;
