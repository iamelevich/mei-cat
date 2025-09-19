import * as v from "valibot";
import { type SylData, SylSchema } from "../element/syl";

/**
 * Groups elements that contain a lyric syllable.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sylLike.html
 */
export const ModelSylLikeSchema: v.GenericSchema<ModelSylLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Individual lyric syllable.
			 * @see https://music-encoding.org/guidelines/v5/elements/syl.html
			 */
			syl: v.optional(v.union([v.array(SylSchema), SylSchema])),
		}),
);

export type ModelSylLikeData = {
	syl?: SylData | SylData[];
};
