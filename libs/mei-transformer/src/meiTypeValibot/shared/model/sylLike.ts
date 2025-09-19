import * as v from "valibot";
import { type SylData, SylSchema } from "..";

/**
 * Groups elements that contain a lyric syllable.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sylLike.html
 */
export const ModelSylLikeSchema: v.GenericSchema<ModelSylLikeData> = v.object({
	/**
	 * Individual lyric syllable.
	 * @see https://music-encoding.org/guidelines/v5/elements/syl.html
	 */
	syl: v.optional(
		v.union([v.lazy(() => SylSchema), v.array(v.lazy(() => SylSchema))]),
	),
});

export type ModelSylLikeData = {
	syl?: SylData | SylData[];
};
