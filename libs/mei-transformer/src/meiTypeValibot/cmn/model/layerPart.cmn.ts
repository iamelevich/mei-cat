import * as v from "valibot";
import {
	type ModelEventLikeCmnData,
	ModelEventLikeCmnSchema,
	type ModelEventLikeMeasureFillingData,
	ModelEventLikeMeasureFillingSchema,
} from "..";

/**
 * Groups notated events that may appear at the layer level in CMN.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.cmn.html
 */
export const ModelLayerPartCmnSchema: v.GenericSchema<ModelLayerPartCmnData> =
	v.intersect([ModelEventLikeCmnSchema, ModelEventLikeMeasureFillingSchema]);

export type ModelLayerPartCmnData = ModelEventLikeCmnData &
	ModelEventLikeMeasureFillingData;
