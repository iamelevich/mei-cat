import * as v from "valibot";
import {
	type ModelControlEventLikeData,
	ModelControlEventLikeSchema,
	type ModelStaffLikeData,
	ModelStaffLikeSchema,
} from "../../shared";
import {
	type ModelControlEventLikeCmnData,
	ModelControlEventLikeCmnSchema,
	type ModelOssiaLikeData,
	ModelOssiaLikeSchema,
} from "..";
import { type ModelMidiLikeData, ModelMidiLikeSchema } from "../../midi";

/**
 * Groups elements that may appear within a CMN measure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measurePart.html
 */
export const ModelMeasurePartSchema: v.GenericSchema<ModelMeasurePartData> =
	v.intersect([
		ModelControlEventLikeSchema,
		ModelControlEventLikeCmnSchema,
		ModelMidiLikeSchema,
		ModelOssiaLikeSchema,
		ModelStaffLikeSchema,
	]);

export type ModelMeasurePartData = ModelControlEventLikeData &
	ModelControlEventLikeCmnData &
	ModelMidiLikeData &
	ModelOssiaLikeData &
	ModelStaffLikeData;
