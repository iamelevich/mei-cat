import * as v from "valibot";
import { type ScoreDefData, ScoreDefSchema } from "../element/scoreDef";

/**
 * Groups elements that provide score meta-information.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.scoreDefLike.html
 */
export const ModelScoreDefLikeSchema: v.GenericSchema<ModelScoreDefLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Container for score meta-information.
			 * @see https://music-encoding.org/guidelines/v5/elements/scoreDef.html
			 */
			scoreDef: v.optional(v.union([ScoreDefSchema, v.array(ScoreDefSchema)])),
		}),
	);

export type ModelScoreDefLikeData = {
	scoreDef?: ScoreDefData | ScoreDefData[];
};
