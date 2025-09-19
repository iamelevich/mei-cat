import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { LabelSchema } from "../../shared/element/label";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";
import { ContentItemSchema } from "../element/contentItem";

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
export const ContentsSchema = v.lazy(() =>
	v.intersect([
		ContentsBaseSchema,
		v.object({
			/**
			 * Reference to element contentItem
			 * @see https://music-encoding.org/guidelines/v5/elements/contentItem.html
			 */
			contentItem: v.union([ContentItemSchema, v.array(ContentItemSchema)]),
			/**
			 * Reference to element label
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.union([LabelSchema, v.array(LabelSchema)]),
		}),
		ModelHeadLikeSchema,
		ModelPLikeSchema,
	]),
);

export type ContentsData = v.InferOutput<typeof ContentsSchema>;
