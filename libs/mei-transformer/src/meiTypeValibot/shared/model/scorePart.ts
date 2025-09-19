import * as v from "valibot";
import {
	type ModelEndingLikeData,
	ModelEndingLikeSchema,
	type ModelSectionLikeData,
	ModelSectionLikeSchema,
} from "..";

/**
 * Groups elements that may appear as part of a score.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.scorePart.html
 */
export const ModelScorePartSchema: v.GenericSchema<ModelScorePartData> =
	v.intersect([ModelEndingLikeSchema, ModelSectionLikeSchema]);

export type ModelScorePartData = ModelEndingLikeData & ModelSectionLikeData;
