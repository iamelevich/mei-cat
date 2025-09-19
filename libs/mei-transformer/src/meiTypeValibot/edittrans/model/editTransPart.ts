import * as v from "valibot";
import { type ModelSylLikeData, ModelSylLikeSchema } from "../../shared";
import {
	type ModelEditTransPartMusicData,
	ModelEditTransPartMusicSchema,
	type ModelEditTransPartTextData,
	ModelEditTransPartTextSchema,
} from "..";

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
