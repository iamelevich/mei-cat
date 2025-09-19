import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { LabelSchema } from "../../shared/element/label";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { HandSchema } from "../element/hand";

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
export const HandListSchema = v.lazy(() =>
	v.intersect([
		HandListBaseSchema,
		v.object({
			/**
			 * Reference to element hand
			 * @see https://music-encoding.org/guidelines/v5/elements/hand.html
			 */
			hand: v.optional(v.union([HandSchema, v.array(HandSchema)])),
			/**
			 * Reference to element label
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.optional(v.union([LabelSchema, v.array(LabelSchema)])),
		}),
		ModelHeadLikeSchema,
	]),
);

export type HandListData = v.InferOutput<typeof HandListSchema>;
