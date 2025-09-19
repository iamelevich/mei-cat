import * as v from "valibot";
import {
	type ModelTextComponentLikeData,
	ModelTextComponentLikeSchema,
	type ModelTextPhraseLikeLimitedData,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";

/**
 * Groups elements that may appear as part of editorial and transcription elements in prose.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.text.html
 */
export const ModelEditTransPartTextSchema: v.GenericSchema<ModelEditTransPartTextData> =
	v.intersect([ModelTextComponentLikeSchema, ModelTextPhraseLikeLimitedSchema]);

export type ModelEditTransPartTextData = ModelTextComponentLikeData &
	ModelTextPhraseLikeLimitedData;
