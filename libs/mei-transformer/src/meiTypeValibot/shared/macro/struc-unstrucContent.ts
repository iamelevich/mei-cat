import * as v from "valibot";
import {
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
	type ModelPLikeData,
	ModelPLikeSchema,
	type ModelTextPhraseLikeLimitedData,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Provides a choice between structured and unstructured/mixed content.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.struc-unstrucContent.html
 */
export const MacroStrucUnstrucContentSchema: v.GenericSchema<MacroStrucUnstrucContentData> =
	v.intersect([
		ModelHeadLikeSchema,
		ModelPLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
	]);

export type MacroStrucUnstrucContentData = ModelHeadLikeData &
	ModelPLikeData &
	ModelTextPhraseLikeLimitedData;
