import * as v from "valibot";
import {
	type ModelSylLikeData,
	ModelSylLikeSchema,
} from "../../shared/model/sylLike";
import {
	type ModelEditTransPartMusicData,
	ModelEditTransPartMusicSchema,
} from "./editTransPart.music";
import {
	type ModelEditTransPartTextData,
	ModelEditTransPartTextSchema,
} from "./editTransPart.text";

/**
 * Groups elements that may appear as part of editorial and transcription elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.html
 */
export const ModelEditTransPartSchema: v.GenericSchema<ModelEditTransPartData> =
	v.lazy(() =>
		v.intersect([
			ModelEditTransPartMusicSchema,
			ModelEditTransPartTextSchema,
			ModelSylLikeSchema,
		]),
	);

export type ModelEditTransPartData = ModelEditTransPartMusicData &
	ModelEditTransPartTextData &
	ModelSylLikeData;
