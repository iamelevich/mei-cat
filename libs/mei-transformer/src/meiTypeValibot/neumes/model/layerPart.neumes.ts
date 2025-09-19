import * as v from "valibot";
import {
	type ModelEventLikeNeumesData,
	ModelEventLikeNeumesSchema,
} from "../model/eventLike.neumes";
import {
	type ModelSyllableLikeData,
	ModelSyllableLikeSchema,
} from "../model/syllableLike";

/**
 * Groups notated events that may appear at the layer level in the neume repertoire.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.neumes.html
 */
export const ModelLayerPartNeumesSchema: v.GenericSchema<ModelLayerPartNeumesData> =
	v.lazy(() =>
		v.intersect([ModelEventLikeNeumesSchema, ModelSyllableLikeSchema]),
	);

export type ModelLayerPartNeumesData = ModelEventLikeNeumesData &
	ModelSyllableLikeData;
