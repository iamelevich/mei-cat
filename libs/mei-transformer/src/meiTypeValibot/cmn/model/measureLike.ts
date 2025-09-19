import * as v from "valibot";
import { type MeasureData, MeasureSchema } from "../element/measure";

/**
 * Groups CMN measure-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measureLike.html
 */
export const ModelMeasureLikeSchema: v.GenericSchema<ModelMeasureLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Unit of musical time consisting of a fixed number of note values of a given type, as determined by the prevailing meter, and delimited in musical notation by bar lines.
			 * @see https://music-encoding.org/guidelines/v5/elements/measure.html
			 */
			measure: v.optional(v.union([MeasureSchema, v.array(MeasureSchema)])),
		}),
	);

export type ModelMeasureLikeData = {
	measure?: MeasureData | MeasureData[];
};
