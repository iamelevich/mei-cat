import * as v from "valibot";

/**
 * Groups elements that represent score parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.scorePart.html
 */
export const ScorePartSchema = v.object({
  // TODO: Add score part elements
});

export type ScorePartData = v.InferOutput<typeof ScorePartSchema>;
