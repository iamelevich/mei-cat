import * as v from "valibot";
import { type ModelNumLikeData, ModelNumLikeSchema } from "..";

/**
 * Groups elements that represent a measurement.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measurementLike.html
 */
export const ModelMeasurementLikeSchema: v.GenericSchema<ModelMeasurementLikeData> =
	v.intersect([ModelNumLikeSchema]);

export type ModelMeasurementLikeData = ModelNumLikeData;
