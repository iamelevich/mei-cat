import * as v from "valibot";
import {
	type ModelEventLikeMensuralData,
	ModelEventLikeMensuralSchema,
} from "..";

/**
 * Groups notated events that may appear at the layer level in the mensural repertoire.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.mensural.html
 */
export const ModelLayerPartMensuralSchema: v.GenericSchema<ModelLayerPartMensuralData> =
	v.intersect([ModelEventLikeMensuralSchema]);

export type ModelLayerPartMensuralData = ModelEventLikeMensuralData;
