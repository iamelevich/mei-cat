import * as v from "valibot";
import {
	type ModelOssiaLikeData,
	ModelOssiaLikeSchema,
} from "../../cmn/model/ossiaLike";
import { type ModelLayerLikeData, ModelLayerLikeSchema } from "./layerLike";
import {
	type ModelStaffPartMensuralAndNeumesData,
	ModelStaffPartMensuralAndNeumesSchema,
} from "./staffPart.mensuralAndNeumes";

/**
 * Groups elements that are components of a staff.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffPart.html
 */
export const ModelStaffPartSchema: v.GenericSchema<ModelStaffPartData> = v.lazy(
	() =>
		v.intersect([
			ModelLayerLikeSchema,
			ModelOssiaLikeSchema,
			ModelStaffPartMensuralAndNeumesSchema,
		]),
);

export type ModelStaffPartData = ModelLayerLikeData &
	ModelOssiaLikeData &
	ModelStaffPartMensuralAndNeumesData;
