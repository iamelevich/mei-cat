import * as v from "valibot";
import {
	type ModelLayerPartCmnData,
	ModelLayerPartCmnSchema,
} from "../../cmn/model/layerPart.cmn";
import {
	type ModelEventLikeData,
	ModelEventLikeSchema,
} from "../model/eventLike";
import {
	type ModelLayerPartMensuralAndNeumesData,
	ModelLayerPartMensuralAndNeumesSchema,
} from "../model/layerPart.mensuralAndNeumes";

/**
 * Groups notated events that may appear at the layer level in all repertoires.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.html
 */
export const ModelLayerPartSchema: v.GenericSchema<ModelLayerPartData> = v.lazy(
	() =>
		v.intersect([
			ModelEventLikeSchema,
			ModelLayerPartCmnSchema,
			ModelLayerPartMensuralAndNeumesSchema,
		]),
);

export type ModelLayerPartData = ModelEventLikeData &
	ModelLayerPartCmnData &
	ModelLayerPartMensuralAndNeumesData;
