import * as v from "valibot";

/**
 * Groups elements that represent measures.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measureLike.html
 */
export const MeasureLikeSchema = v.object({
  // TODO: Add measure-like elements
});

export type MeasureLikeData = v.InferOutput<typeof MeasureLikeSchema>;
