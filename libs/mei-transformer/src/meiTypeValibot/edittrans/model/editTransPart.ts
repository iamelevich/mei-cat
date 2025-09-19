import * as v from "valibot";
import {
	type ModelEditTransPartMusicData,
	ModelEditTransPartMusicSchema,
	type ModelEditTransPartTextData,
	ModelEditTransPartTextSchema,
} from "..";
import { type ModelSylLikeData, ModelSylLikeSchema } from "../../shared";

/**
 * Groups elements that may appear as part of editorial and transcription elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.html
 */
export const ModelEditTransPartSchema: v.GenericSchema<ModelEditTransPartData> =
	v.intersect([
		ModelEditTransPartMusicSchema,
		ModelEditTransPartTextSchema,
		ModelSylLikeSchema,
	]);

export type ModelEditTransPartData = ModelEditTransPartMusicData &
	ModelEditTransPartTextData &
	ModelSylLikeData;
