import * as v from "valibot";
import {
	type ModelPbLikeData,
	ModelPbLikeSchema,
	type ModelTextPhraseLikeLimitedData,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Groups textual elements that occur at the level of individual words or phrases.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textPhraseLike.html
 */
export const ModelTextPhraseLikeSchema: v.GenericSchema<ModelTextPhraseLikeData> =
	v.intersect([ModelPbLikeSchema, ModelTextPhraseLikeLimitedSchema]);

export type ModelTextPhraseLikeData = ModelPbLikeData &
	ModelTextPhraseLikeLimitedData;
