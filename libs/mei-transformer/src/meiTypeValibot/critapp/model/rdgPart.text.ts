import * as v from "valibot";
import {
	type ModelTextComponentLikeData,
	ModelTextComponentLikeSchema,
} from "../../shared/model/textComponentLike";
import {
	type ModelTextPhraseLikeLimitedData,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared/model/textPhraseLike.limited";

/**
 * Groups elements that may appear as part of a textual variant.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.text.html
 */
export const ModelRdgPartTextSchema: v.GenericSchema<ModelRdgPartTextData> =
	v.lazy(() =>
		v.intersect([
			ModelTextComponentLikeSchema,
			ModelTextPhraseLikeLimitedSchema,
		]),
	);

export type ModelRdgPartTextData = ModelTextComponentLikeData &
	ModelTextPhraseLikeLimitedData;
