import * as v from "valibot";
import { type ItemData, ItemSchema } from "..";

/**
 * Collects FRBR item-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.itemLike.html
 */
export const ModelItemLikeSchema: v.GenericSchema<ModelItemLikeData> = v.object(
	{
		/**
		 * Single instance or exemplar of a source/manifestation.
		 * @see https://music-encoding.org/guidelines/v5/elements/item.html
		 */
		item: v.optional(
			v.union([v.lazy(() => ItemSchema), v.array(v.lazy(() => ItemSchema))]),
		),
	},
);

export type ModelItemLikeData = {
	item?: ItemData | ItemData[];
};
