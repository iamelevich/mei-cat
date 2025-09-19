import * as v from "valibot";
import {
	type ModelLgLikeData,
	ModelLgLikeSchema,
	type ModelListLikeData,
	ModelListLikeSchema,
	type ModelQuoteLikeData,
	ModelQuoteLikeSchema,
} from "../../text";
import { type ModelPLikeData, ModelPLikeSchema } from "..";
import { type ModelTableLikeData, ModelTableLikeSchema } from "../../figtable";

/**
 * Groups block-level text elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textComponentLike.html
 */
export const ModelTextComponentLikeSchema: v.GenericSchema<ModelTextComponentLikeData> =
	v.intersect([
		ModelLgLikeSchema,
		ModelListLikeSchema,
		ModelPLikeSchema,
		ModelQuoteLikeSchema,
		ModelTableLikeSchema,
	]);

export type ModelTextComponentLikeData = ModelLgLikeData &
	ModelListLikeData &
	ModelPLikeData &
	ModelQuoteLikeData &
	ModelTableLikeData;
