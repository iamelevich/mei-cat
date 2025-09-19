import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelHeadLikeSchema } from "../../shared";
import { ModelItemLikeSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ItemListSchema
 */
const ItemListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Gathers bibliographic item entities.
 * @see https://music-encoding.org/guidelines/v5/elements/itemList.html
 */
export const ItemListSchema = v.intersect([
	ItemListBaseSchema,
	ModelHeadLikeSchema,
	ModelItemLikeSchema,
]);

export type ItemListData = v.InferOutput<typeof ItemListSchema>;
