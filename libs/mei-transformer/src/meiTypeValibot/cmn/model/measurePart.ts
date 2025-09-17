import * as v from "valibot";

/**
 * Groups elements that represent measure parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measurePart.html
 */
export const MeasurePartSchema = v.object({
  // TODO: Add measure part elements
});

export type MeasurePartData = v.InferOutput<typeof MeasurePartSchema>;
