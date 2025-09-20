import * as v from "valibot";
import { type ModelHeadLikeData, ModelHeadLikeSchema } from "../model/headLike";
import { type ModelPLikeData, ModelPLikeSchema } from "../model/pLike";
import {
	type ModelTextPhraseLikeLimitedData,
	ModelTextPhraseLikeLimitedSchema,
} from "../model/textPhraseLike.limited";

/**
 * Provides a choice between structured and unstructured/mixed content.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.struc-unstrucContent.html
 */
export const MacroStrucUnstrucContentSchema: v.GenericSchema<MacroStrucUnstrucContentData> =
	v.lazy(() =>
		v.intersect([
			ModelHeadLikeSchema,
			ModelPLikeSchema,
			ModelTextPhraseLikeLimitedSchema,
		]),
	);

export type MacroStrucUnstrucContentData = ModelHeadLikeData &
	ModelPLikeData &
	ModelTextPhraseLikeLimitedData;
