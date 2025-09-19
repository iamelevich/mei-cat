import * as v from "valibot";
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
import { type ModelPLikeData, ModelPLikeSchema } from "../model/pLike";

/**
 * Groups block-level text elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textComponentLike.html
 */
export const ModelTextComponentLikeSchema: v.GenericSchema<ModelTextComponentLikeData> =
	v.lazy(() =>
		v.intersect([
			ModelLgLikeSchema,
			ModelListLikeSchema,
			ModelPLikeSchema,
			ModelQuoteLikeSchema,
			ModelTableLikeSchema,
		]),
	);

export type ModelTextComponentLikeData = ModelLgLikeData &
	ModelListLikeData &
	ModelPLikeData &
	ModelQuoteLikeData &
	ModelTableLikeData;
