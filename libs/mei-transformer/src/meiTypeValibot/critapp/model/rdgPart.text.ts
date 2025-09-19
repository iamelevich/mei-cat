import * as v from "valibot";
import {
	type ModelTextComponentLikeData,
	ModelTextComponentLikeSchema,
	type ModelTextPhraseLikeLimitedData,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";

/**
 * Groups elements that may appear as part of a textual variant.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.text.html
 */
export const ModelRdgPartTextSchema: v.GenericSchema<ModelRdgPartTextData> =
	v.intersect([ModelTextComponentLikeSchema, ModelTextPhraseLikeLimitedSchema]);

export type ModelRdgPartTextData = ModelTextComponentLikeData &
	ModelTextPhraseLikeLimitedData;
