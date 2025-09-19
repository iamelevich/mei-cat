import * as v from "valibot";
import {
	type ModelSectionPartCmnData,
	ModelSectionPartCmnSchema,
} from "../../cmn/model/sectionPart.cmn";
import {
	type ModelEndingLikeData,
	ModelEndingLikeSchema,
} from "../model/endingLike";
import {
	type ModelScoreDefLikeData,
	ModelScoreDefLikeSchema,
} from "../model/scoreDefLike";
import {
	type ModelSectionLikeData,
	ModelSectionLikeSchema,
} from "../model/sectionLike";
import {
	type ModelSectionPartMensuralAndNeumesData,
	ModelSectionPartMensuralAndNeumesSchema,
} from "../model/sectionPart.mensuralAndNeumes";
import {
	type ModelStaffDefLikeData,
	ModelStaffDefLikeSchema,
} from "../model/staffDefLike";

/**
 * Groups elements that may appear as part of a section.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionPart.html
 */
export const ModelSectionPartSchema: v.GenericSchema<ModelSectionPartData> =
	v.lazy(() =>
		v.intersect([
			ModelEndingLikeSchema,
			ModelScoreDefLikeSchema,
			ModelSectionLikeSchema,
			ModelSectionPartCmnSchema,
			ModelSectionPartMensuralAndNeumesSchema,
			ModelStaffDefLikeSchema,
		]),
	);

export type ModelSectionPartData = ModelEndingLikeData &
	ModelScoreDefLikeData &
	ModelSectionLikeData &
	ModelSectionPartCmnData &
	ModelSectionPartMensuralAndNeumesData &
	ModelStaffDefLikeData;
