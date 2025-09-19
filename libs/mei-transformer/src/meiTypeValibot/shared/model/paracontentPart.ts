import * as v from "valibot";
import {
	type ModelStageDirLikeData,
	ModelStageDirLikeSchema,
} from "../../drama/model/stageDirLike";
import {
	type ModelEditLikeData,
	ModelEditLikeSchema,
} from "../../edittrans/model/editLike";
import {
	type ModelTranscriptionLikeData,
	ModelTranscriptionLikeSchema,
} from "../../edittrans/model/transcriptionLike";
import {
	type ModelTableLikeData,
	ModelTableLikeSchema,
} from "../../figtable/model/tableLike";
import {
	type ModelLgLikeData,
	ModelLgLikeSchema,
} from "../../text/model/lgLike";
import {
	type ModelListLikeData,
	ModelListLikeSchema,
} from "../../text/model/listLike";
import {
	type ModelQuoteLikeData,
	ModelQuoteLikeSchema,
} from "../../text/model/quoteLike";
import {
	type ModelTextPhraseLikeData,
	ModelTextPhraseLikeSchema,
} from "../model/textPhraseLike";

/**
 * Groups elements which may appear as part of the paragraph content model. A paragraph may contain inline elements and all other block-level elements except itself.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.paracontentPart.html
 */
export const ModelParacontentPartSchema: v.GenericSchema<ModelParacontentPartData> =
	v.lazy(() =>
		v.intersect([
			ModelEditLikeSchema,
			ModelLgLikeSchema,
			ModelListLikeSchema,
			ModelQuoteLikeSchema,
			ModelStageDirLikeSchema,
			ModelTableLikeSchema,
			ModelTextPhraseLikeSchema,
			ModelTranscriptionLikeSchema,
		]),
	);

export type ModelParacontentPartData = ModelEditLikeData &
	ModelLgLikeData &
	ModelListLikeData &
	ModelQuoteLikeData &
	ModelStageDirLikeData &
	ModelTableLikeData &
	ModelTextPhraseLikeData &
	ModelTranscriptionLikeData;
