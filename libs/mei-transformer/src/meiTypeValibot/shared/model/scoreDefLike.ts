import * as v from "valibot";
import { type ScoreDefData, ScoreDefSchema } from "..";

/**
 * Groups elements that provide score meta-information.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.scoreDefLike.html
 */
export const ModelScoreDefLikeSchema: v.GenericSchema<ModelScoreDefLikeData> =
	v.object({
		/**
		 * Container for score meta-information.
		 * @see https://music-encoding.org/guidelines/v5/elements/scoreDef.html
		 */
		scoreDef: v.optional(
			v.union([
				v.lazy(() => ScoreDefSchema),
				v.array(v.lazy(() => ScoreDefSchema)),
			]),
		),
	});

export type ModelScoreDefLikeData = {
	scoreDef?: ScoreDefData | ScoreDefData[];
};
