import * as v from "valibot";
import { type LayerDefData, LayerDefSchema } from "..";

/**
 * Groups elements that permit declaration of layer properties.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerDefLike.html
 */
export const ModelLayerDefLikeSchema: v.GenericSchema<ModelLayerDefLikeData> =
	v.object({
		/**
		 * Container for layer meta-information.
		 * @see https://music-encoding.org/guidelines/v5/elements/layerDef.html
		 */
		layerDef: v.optional(
			v.union([
				v.lazy(() => LayerDefSchema),
				v.array(v.lazy(() => LayerDefSchema)),
			]),
		),
	});

export type ModelLayerDefLikeData = {
	layerDef?: LayerDefData | LayerDefData[];
};
