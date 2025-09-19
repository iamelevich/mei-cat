import * as v from "valibot";
import { type StageDirData, StageDirSchema } from "../element/stageDir";

/**
 * Groups elements containing stage directions in performance texts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.stageDirLike.html
 */
export const ModelStageDirLikeSchema: v.GenericSchema<ModelStageDirLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Contains any kind of stage direction within a dramatic text or fragment.
			 * @see https://music-encoding.org/guidelines/v5/elements/stageDir.html
			 */
			stageDir: v.optional(v.union([StageDirSchema, v.array(StageDirSchema)])),
		}),
	);

export type ModelStageDirLikeData = {
	stageDir?: StageDirData | StageDirData[];
};
