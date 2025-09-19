import * as v from "valibot";
import { type ScoreData, ScoreSchema } from "..";

/**
 * Groups elements that represent a score.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.scoreLike.html
 */
export const ModelScoreLikeSchema: v.GenericSchema<ModelScoreLikeData> =
	v.object({
		/**
		 * Full score view of the musical content.
		 * @see https://music-encoding.org/guidelines/v5/elements/score.html
		 */
		score: v.optional(
			v.union([v.lazy(() => ScoreSchema), v.array(v.lazy(() => ScoreSchema))]),
		),
	});

export type ModelScoreLikeData = {
	score?: ScoreData | ScoreData[];
};
