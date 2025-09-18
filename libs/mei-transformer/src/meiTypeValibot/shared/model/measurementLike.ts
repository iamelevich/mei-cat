import * as v from "valibot";

/**
 * Groups elements that represent measurement-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measurementLike.html
 */
export const MeasurementLikeSchema = v.object({
  // TODO: Add measurement-like elements
});

export type MeasurementLikeData = v.InferOutput<typeof MeasurementLikeSchema>;
