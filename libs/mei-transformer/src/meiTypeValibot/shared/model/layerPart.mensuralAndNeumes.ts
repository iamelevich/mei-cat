import * as v from "valibot";
import {
	type ModelLayerPartMensuralData,
	ModelLayerPartMensuralSchema,
} from "../../mensural";
import { type ModelMidiLikeData, ModelMidiLikeSchema } from "../../midi";
import {
	type ModelLayerPartNeumesData,
	ModelLayerPartNeumesSchema,
} from "../../neumes";
import {
	type ModelNoteModifierLikeData,
	ModelNoteModifierLikeSchema,
} from "..";

/**
 * Groups notated events at the layer level that are shared by the mensural and neume repertoires.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.mensuralAndNeumes.html
 */
export const ModelLayerPartMensuralAndNeumesSchema: v.GenericSchema<ModelLayerPartMensuralAndNeumesData> =
	v.intersect([
		ModelLayerPartMensuralSchema,
		ModelLayerPartNeumesSchema,
		ModelMidiLikeSchema,
		ModelNoteModifierLikeSchema,
	]);

export type ModelLayerPartMensuralAndNeumesData = ModelLayerPartMensuralData &
	ModelLayerPartNeumesData &
	ModelMidiLikeData &
	ModelNoteModifierLikeData;
