import * as v from "valibot";
import {
	type ModelEventLikeData,
	ModelEventLikeSchema,
	type ModelLayerPartMensuralAndNeumesData,
	ModelLayerPartMensuralAndNeumesSchema,
} from "..";
import { type ModelLayerPartCmnData, ModelLayerPartCmnSchema } from "../../cmn";

/**
 * Groups notated events that may appear at the layer level in all repertoires.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.html
 */
export const ModelLayerPartSchema: v.GenericSchema<ModelLayerPartData> =
	v.intersect([
		ModelEventLikeSchema,
		ModelLayerPartCmnSchema,
		ModelLayerPartMensuralAndNeumesSchema,
	]);

export type ModelLayerPartData = ModelEventLikeData &
	ModelLayerPartCmnData &
	ModelLayerPartMensuralAndNeumesData;
