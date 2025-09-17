import * as v from "valibot";
import { StandardTagSchema } from "../common";

/**
 * Full score view of the musical content.
 * @see https://music-encoding.org/guidelines/v5/elements/score.html
 */
export const ScoreSchema = v.object({
  ...StandardTagSchema.entries,
});

export type ScoreData = v.InferOutput<typeof ScoreSchema>;
