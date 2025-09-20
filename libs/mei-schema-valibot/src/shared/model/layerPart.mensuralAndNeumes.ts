import * as v from "valibot";
import {
	type ModelLayerPartMensuralData,
	ModelLayerPartMensuralSchema,
} from "../../mensural/model/layerPart.mensural";
import {
	type ModelMidiLikeData,
	ModelMidiLikeSchema,
} from "../../midi/model/midiLike";
import {
	type ModelLayerPartNeumesData,
	ModelLayerPartNeumesSchema,
} from "../../neumes/model/layerPart.neumes";
import {
	type ModelNoteModifierLikeData,
	ModelNoteModifierLikeSchema,
} from "./noteModifierLike";

/**
 * Groups notated events at the layer level that are shared by the mensural and neume repertoires.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.mensuralAndNeumes.html
 */
export const ModelLayerPartMensuralAndNeumesSchema: v.GenericSchema<ModelLayerPartMensuralAndNeumesData> =
	v.lazy(() =>
		v.intersect([
			ModelLayerPartMensuralSchema,
			ModelLayerPartNeumesSchema,
			ModelMidiLikeSchema,
			ModelNoteModifierLikeSchema,
		]),
	);

export type ModelLayerPartMensuralAndNeumesData = ModelLayerPartMensuralData &
	ModelLayerPartNeumesData &
	ModelMidiLikeData &
	ModelNoteModifierLikeData;
