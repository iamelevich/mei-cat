import * as v from "valibot";
import {
	type ModelLayerLikeData,
	ModelLayerLikeSchema,
	type ModelStaffPartMensuralAndNeumesData,
	ModelStaffPartMensuralAndNeumesSchema,
} from "..";
import { type ModelOssiaLikeData, ModelOssiaLikeSchema } from "../../cmn";

/**
 * Groups elements that are components of a staff.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffPart.html
 */
export const ModelStaffPartSchema: v.GenericSchema<ModelStaffPartData> =
	v.intersect([
		ModelLayerLikeSchema,
		ModelOssiaLikeSchema,
		ModelStaffPartMensuralAndNeumesSchema,
	]);

export type ModelStaffPartData = ModelLayerLikeData &
	ModelOssiaLikeData &
	ModelStaffPartMensuralAndNeumesData;
