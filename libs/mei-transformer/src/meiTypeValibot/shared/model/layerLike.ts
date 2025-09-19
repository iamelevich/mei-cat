import * as v from "valibot";
import { type LayerData, LayerSchema } from "../element/layer";

/**
 * Groups elements that function as notational layers within a staff.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerLike.html
 */
export const ModelLayerLikeSchema: v.GenericSchema<ModelLayerLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * An independent stream of events on a staff.
			 * @see https://music-encoding.org/guidelines/v5/elements/layer.html
			 */
			layer: v.optional(v.union([v.array(LayerSchema), LayerSchema])),
		}),
);

export type ModelLayerLikeData = {
	layer?: LayerData | LayerData[];
};
