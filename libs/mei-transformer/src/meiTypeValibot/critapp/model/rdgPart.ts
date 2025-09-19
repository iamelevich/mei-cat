import * as v from "valibot";
import { type ModelSylLikeData, ModelSylLikeSchema } from "../../shared";
import {
	type ModelRdgPartMusicData,
	ModelRdgPartMusicSchema,
	type ModelRdgPartTextData,
	ModelRdgPartTextSchema,
} from "..";

/**
 * Groups elements that may appear as part of a textual or musical variant.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.html
 */
export const ModelRdgPartSchema: v.GenericSchema<ModelRdgPartData> =
	v.intersect([
		ModelRdgPartMusicSchema,
		ModelRdgPartTextSchema,
		ModelSylLikeSchema,
	]);

export type ModelRdgPartData = ModelRdgPartMusicData &
	ModelRdgPartTextData &
	ModelSylLikeData;
