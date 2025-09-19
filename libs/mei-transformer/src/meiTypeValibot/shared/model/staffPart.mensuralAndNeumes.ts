import * as v from "valibot";
import {
	type ModelStaffPartMensuralData,
	ModelStaffPartMensuralSchema,
} from "../../mensural";

/**
 * Groups elements that are components of a staff in the mensural and neume repertoires.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffPart.mensuralAndNeumes.html
 */
export const ModelStaffPartMensuralAndNeumesSchema: v.GenericSchema<ModelStaffPartMensuralAndNeumesData> =
	v.intersect([ModelStaffPartMensuralSchema]);

export type ModelStaffPartMensuralAndNeumesData = ModelStaffPartMensuralData;
