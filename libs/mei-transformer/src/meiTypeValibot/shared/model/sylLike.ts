import * as v from "valibot";
import { SylSchema, type SylData } from "../syl";

/**
 * Groups elements that contain a lyric syllable.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sylLike.html
 */
export const SylLikeSchema = v.object({
  /**
   * Contains a single lyric syllable.
   * @see https://music-encoding.org/guidelines/v5/elements/syl.html
   */
  syl: v.optional(
    v.union([v.lazy(() => SylSchema), v.array(v.lazy(() => SylSchema))]),
  ),
});

export type SylLikeData = v.InferOutput<typeof SylLikeSchema>;
