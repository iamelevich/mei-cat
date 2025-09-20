import * as v from "valibot";
import { type ModelStaffLikeData, ModelStaffLikeSchema } from "./staffLike";

/**
 * Groups elements that may appear as part of a section in the mensural and neume repertoires.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionPart.mensuralAndNeumes.html
 */
export const ModelSectionPartMensuralAndNeumesSchema: v.GenericSchema<ModelSectionPartMensuralAndNeumesData> =
	v.lazy(() => v.intersect([ModelStaffLikeSchema]));

export type ModelSectionPartMensuralAndNeumesData = ModelStaffLikeData;
