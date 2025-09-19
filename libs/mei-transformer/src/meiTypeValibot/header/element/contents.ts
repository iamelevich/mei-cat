import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrPointingSchema,
	LabelSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
} from "../../shared";
import { ContentItemSchema } from ".";

/**
 * Base schema with attribute, to simplify types for ContentsSchema
 */
const ContentsBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * List of the material contained within a resource.
 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
 */
export const ContentsSchema = v.intersect([
	ContentsBaseSchema,
	v.object({
		/**
		 * Reference to element contentItem
		 * @see https://music-encoding.org/guidelines/v5/elements/contentItem.html
		 */
		contentItem: v.union([
			v.lazy(() => ContentItemSchema),
			v.array(v.lazy(() => ContentItemSchema)),
		]),
		/**
		 * Reference to element label
		 * @see https://music-encoding.org/guidelines/v5/elements/label.html
		 */
		label: v.union([
			v.lazy(() => LabelSchema),
			v.array(v.lazy(() => LabelSchema)),
		]),
	}),
	ModelHeadLikeSchema,
	ModelPLikeSchema,
]);

export type ContentsData = v.InferOutput<typeof ContentsSchema>;
