import * as v from "valibot";
import {
	type ModelMeasureLikeData,
	ModelMeasureLikeSchema,
} from "./measureLike";

/**
 * Groups elements that may appear as part of a section.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionPart.cmn.html
 */
export const ModelSectionPartCmnSchema: v.GenericSchema<ModelSectionPartCmnData> =
	v.lazy(() => v.intersect([ModelMeasureLikeSchema]));

export type ModelSectionPartCmnData = ModelMeasureLikeData;
