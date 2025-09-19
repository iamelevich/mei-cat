import * as v from "valibot";
import {
	type ModelEndingLikeData,
	ModelEndingLikeSchema,
	type ModelScoreDefLikeData,
	ModelScoreDefLikeSchema,
	type ModelSectionLikeData,
	ModelSectionLikeSchema,
	type ModelSectionPartMensuralAndNeumesData,
	ModelSectionPartMensuralAndNeumesSchema,
	type ModelStaffDefLikeData,
	ModelStaffDefLikeSchema,
} from "..";
import {
	type ModelSectionPartCmnData,
	ModelSectionPartCmnSchema,
} from "../../cmn";

/**
 * Groups elements that may appear as part of a section.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionPart.html
 */
export const ModelSectionPartSchema: v.GenericSchema<ModelSectionPartData> =
	v.intersect([
		ModelEndingLikeSchema,
		ModelScoreDefLikeSchema,
		ModelSectionLikeSchema,
		ModelSectionPartCmnSchema,
		ModelSectionPartMensuralAndNeumesSchema,
		ModelStaffDefLikeSchema,
	]);

export type ModelSectionPartData = ModelEndingLikeData &
	ModelScoreDefLikeData &
	ModelSectionLikeData &
	ModelSectionPartCmnData &
	ModelSectionPartMensuralAndNeumesData &
	ModelStaffDefLikeData;
