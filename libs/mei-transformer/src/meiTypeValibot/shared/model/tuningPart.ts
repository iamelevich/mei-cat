import * as v from "valibot";

/**
 * Groups elements that represent tuning parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.tuningPart.html
 */
export const TuningPartSchema = v.object({
  // TODO: Add tuning part elements
});

export type TuningPartData = v.InferOutput<typeof TuningPartSchema>;
