import * as v from "valibot";
import {
	type ModelControlEventLikeData,
	ModelControlEventLikeSchema,
} from "../../shared/model/controlEventLike";

/**
 * Groups elements that are components of a staff in the mensural repertoire.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffPart.mensural.html
 */
export const ModelStaffPartMensuralSchema: v.GenericSchema<ModelStaffPartMensuralData> =
	v.lazy(() => v.intersect([ModelControlEventLikeSchema]));

export type ModelStaffPartMensuralData = ModelControlEventLikeData;
