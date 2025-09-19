import * as v from "valibot";
import {
	type ModelEditLikeData,
	ModelEditLikeSchema,
	type ModelTranscriptionLikeData,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import {
	type ModelLgLikeData,
	ModelLgLikeSchema,
	type ModelListLikeData,
	ModelListLikeSchema,
	type ModelQuoteLikeData,
	ModelQuoteLikeSchema,
} from "../../text";
import {
	type ModelStageDirLikeData,
	ModelStageDirLikeSchema,
} from "../../drama";
import { type ModelTableLikeData, ModelTableLikeSchema } from "../../figtable";
import { type ModelTextPhraseLikeData, ModelTextPhraseLikeSchema } from "..";

/**
 * Groups elements which may appear as part of the paragraph content model. A paragraph may contain inline elements and all other block-level elements except itself.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.paracontentPart.html
 */
export const ModelParacontentPartSchema: v.GenericSchema<ModelParacontentPartData> =
	v.intersect([
		ModelEditLikeSchema,
		ModelLgLikeSchema,
		ModelListLikeSchema,
		ModelQuoteLikeSchema,
		ModelStageDirLikeSchema,
		ModelTableLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]);

export type ModelParacontentPartData = ModelEditLikeData &
	ModelLgLikeData &
	ModelListLikeData &
	ModelQuoteLikeData &
	ModelStageDirLikeData &
	ModelTableLikeData &
	ModelTextPhraseLikeData &
	ModelTranscriptionLikeData;
